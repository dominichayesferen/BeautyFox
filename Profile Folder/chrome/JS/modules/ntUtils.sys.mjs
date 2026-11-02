export class NTRegistry {
    static hives = {
        "HKCR": 0x80000000, "HKEY_CLASSES_ROOT": 0x80000000,
        "HKCU": 0x80000001, "HKEY_CURRENT_USER": 0x80000001,
        "HKLM": 0x80000002, "HKEY_LOCAL_MACHINE": 0x80000002,
        "HKU": 0x80000003, "HKEY_USERS": 0x80000003,
        "HKCC": 0x80000005, "HKEY_CURRENT_CONFIG": 0x80000005
    };

    static getRegKeyValue(hive, subkey, key, expectedType) {
        // Check if the provided hive is valid
        if (!(hive in NTRegistry.hives)) {
            console.error("Invalid hive specified.");
            return null;
        }

        const advapi32 = ctypes.open("advapi32.dll");

        const HKEY = ctypes.voidptr_t;
        const DWORD = ctypes.uint32_t;
        //const REG_SZ = 1; // String value type
        //const REG_DWORD = 4; // DWORD (32-bit) value type
        const KEY_READ = 0x20019;
        const LPBYTE = ctypes.voidptr_t;
        const LPDWORD = ctypes.voidptr_t;
        const LPCTSTR = ctypes.jschar.ptr;

        const hKey = ctypes.cast(ctypes.uintptr_t(NTRegistry.hives[hive]), HKEY);

        const RegOpenKeyExW = advapi32.declare("RegOpenKeyExW",
            ctypes.winapi_abi,
            ctypes.int,
            HKEY,      
            LPCTSTR,   
            DWORD,     
            DWORD,     
            HKEY.ptr); 

        const RegQueryValueExW = advapi32.declare("RegQueryValueExW",
            ctypes.winapi_abi,
            ctypes.int,
            HKEY,     
            LPCTSTR,  
            LPDWORD,  
            LPDWORD,  
            LPBYTE,   
            LPDWORD); 

        var hKeyResult = HKEY();
        var result = RegOpenKeyExW(hKey, subkey, 0, KEY_READ, hKeyResult.address());

        if (result === 0) {
            var value;
            var size = DWORD();
            size.value = 4096; // Adjust size as needed

            var queryResult = RegQueryValueExW(hKeyResult, key, null, null, null, size.address());

            if (queryResult === 0) {
                if (expectedType === "DWORD") { value = DWORD(); }
                else if (expectedType === "String") { value = ctypes.jschar.array(size.value)(); }
                else {
                    console.error("Invalid expected value type specified.");
                    return null;
                }

                queryResult = RegQueryValueExW(hKeyResult, key, null, null, value.address(), size.address());
                if (queryResult === 0) {
                    if (expectedType === "DWORD") {
                        console.log('Reading key of type '+ expectedType + ': ' + hive + '\\' + subkey + '\\' + key + ' = ' + value.value)
                        return value.value;
                    } else if (expectedType === "String") {
                        console.log('Reading key of type '+ expectedType + ': ' + hive + '\\' + subkey + '\\' + key + ' = ' + value.readString())
                        return value.readString();
                    }
                } else {
                    console.error("Failed to read registry key value. RegQueryValueExW error code: " + queryResult);
                }
            } else {
                console.error("Failed to read registry key value size. RegQueryValueExW error code: " + queryResult);
            }
        } else {
            console.error("Failed to open registry key. RegOpenKeyExW error code: " + result);
        }

        advapi32.close();
        return null;
    }
}

export class NTInvoke {
    static aboutIE() {
        const user32 = ctypes.open("user32.dll"); const shell32 = ctypes.open("shell32.dll");
        const HICON = ctypes.uintptr_t; const HWND = ctypes.voidptr_t;

        const ExtractIcon = shell32.declare("ExtractIconW", ctypes.winapi_abi, HICON, ctypes.voidptr_t, ctypes.char16_t.ptr, ctypes.uint32_t);
        const szPath = "C:\\Program Files\\Internet Explorer\\iexplore.exe";
        const hIcon = ExtractIcon(null, szPath, 0);
        if (hIcon == 0 || hIcon == ctypes.voidptr_t(0)) {
            console.error("DID THEY FINALLY KILL IT?? Failed to extract icon from iexplore.exe");
        } else {
            const GetDesktopWindow = user32.declare("GetDesktopWindow", ctypes.winapi_abi, HWND);
            const ShellAboutW = shell32.declare("ShellAboutW", ctypes.winapi_abi, ctypes.voidptr_t, HWND, ctypes.char16_t.ptr, ctypes.char16_t.ptr, HICON);
            // hwndparent, lpszTitle, lpszText, hIcon
            ShellAboutW(GetDesktopWindow(), "Internet Explorer", null, hIcon);
        }
        shell32.close();
        user32.close();
    }

    static runDLL(dllarg, arg) {
        const HWND = ctypes.voidptr_t;
        const LPCWSTR = ctypes.jschar.ptr;
        const HINSTANCE = ctypes.voidptr_t;
        const UINT = ctypes.uint32_t;

        const shell32 = ctypes.open("shell32.dll");
        const ShellExecuteW = shell32.declare(
            "ShellExecuteW",
            ctypes.winapi_abi,
            HINSTANCE,
            HWND, LPCWSTR, LPCWSTR, LPCWSTR, LPCWSTR, UINT
        );

        const argsWide = ctypes.jschar.array()(`${dllarg},${arg}`);

        const hInstance = ShellExecuteW(
            null,
            "open",
            ctypes.jschar.array()("Rundll32.exe"),
            argsWide,
            null,
            1 // SHOWNORMAL
        );
        if (hInstance <= 32) 
            console.error("RunDLL failed to start. "+ hInstance.toString())

        shell32.close();
    }

    static runCPL(cpl) {
        const HWND = ctypes.voidptr_t;
        const LPCWSTR = ctypes.jschar.ptr;
        const HINSTANCE = ctypes.voidptr_t;
        const UINT = ctypes.uint32_t;

        const shell32 = ctypes.open("shell32.dll");
        const ShellExecuteW = shell32.declare(
            "ShellExecuteW",
            ctypes.winapi_abi,
            HINSTANCE,
            HWND, LPCWSTR, LPCWSTR, LPCWSTR, LPCWSTR, UINT
        );

        const argsWide = ctypes.jschar.array()(`/name ${cpl}`);

        const hInstance = ShellExecuteW(
            null,
            "open",
            ctypes.jschar.array()("control.exe"),
            argsWide,
            null,
            1 // SHOWNORMAL
        );
        if (hInstance <= 32) 
            console.error("CPL failed to start. "+ hInstance.toString())

        shell32.close();
    }

    static runMSDT() {
        const HWND = ctypes.voidptr_t;
        const LPCWSTR = ctypes.jschar.ptr;
        const HINSTANCE = ctypes.voidptr_t;
        const UINT = ctypes.uint32_t;

        const shell32 = ctypes.open("shell32.dll");
        const ShellExecuteW = shell32.declare(
            "ShellExecuteW",
            ctypes.winapi_abi,
            HINSTANCE,
            HWND, LPCWSTR, LPCWSTR, LPCWSTR, LPCWSTR, UINT
        );

        const argsWide = ctypes.jschar.array()("-skip TRUE -path C:\\Windows\\diagnostics\\system\\networking -ep NetworkDiagnosticsConnectivity");

        const hInstance = ShellExecuteW(
            null,
            "open",
            ctypes.jschar.array()("msdt.exe"),
            argsWide,
            null,
            1 // SHOWNORMAL
        );
        if (hInstance <= 32) 
            console.error("MSDT failed to start. "+ hInstance.toString())

        shell32.close();
    }

    static runEdge() {
        const HWND = ctypes.voidptr_t;
        const LPCWSTR = ctypes.jschar.ptr;
        const HINSTANCE = ctypes.voidptr_t;
        const UINT = ctypes.uint32_t;

        const shell32 = ctypes.open("shell32.dll");
        const ShellExecuteW = shell32.declare(
            "ShellExecuteW",
            ctypes.winapi_abi,
            HINSTANCE,
            HWND, LPCWSTR, LPCWSTR, LPCWSTR, LPCWSTR, UINT
        );

        const argsWide = ctypes.jschar.array()("");

        const hInstance = ShellExecuteW(
            null,
            "open",
            ctypes.jschar.array()("microsoft-edge:"),
            argsWide,
            null,
            1 // SHOWNORMAL
        );
        if (hInstance <= 32) 
            console.error("Something happened trying to Edge. "+ hInstance.toString())

        shell32.close();
    }
}