<img src="https://github.com/user-attachments/assets/512e4c84-3837-4a51-854c-677924f9a8ff" alt="Logo" width="128" align="left"/>

# BeautyFox

<b>A more beautiful web at your service</b>

<br>

<sup>Logo by OjasK</sup>

###### BeautyFox is not officially developed, approved or endorsed by Microsoft

![placeholder](https://github.com/user-attachments/assets/c839650d-006b-4ffb-b698-6d748875a33e)

BeautyFox is a **Mozilla Firefox 115 - latest ESR** CSS and JS modification that aims to revive the look and feel of Internet Explorer releases, from the clean minimalist essence of Internet Explorer 9 to 11 to the toolbar-heavy tabbed interface of Internet Explorer 7 and 8 (with Classic Internet Explorer to come in the future), while also bringing beta designs and obscure content to the limelight and retrofitting new content into every design.


## Coming from Beautyfox 1.0?

Just install the latest release normally by deleting your `chrome` folder and placing the `chrome` folder in its place - upon launching Beautyfox all the settings from 1.0 will be automatically migrated to the new Beautyfox release.


## Want old Chromium designs instead?

Check out Geckium, Beautyfox's younger brother for replicating Chromium's historic designs, at [https://github.com/angelbruni/Geckium](https://github.com/angelbruni/Geckium).


# Compatibility

Beautyfox is designed for the following platforms:

- Linux (tested on Feren OS)
- Windows 7
- Windows 8.1
- Windows 10 (with Native Controls Patch)
- Windows 11
- macOS (tested on Sequoia)

However,

- Beautyfox can be used on the latest, non-ESR, releases of Firefox, **but** Beautyfox is only designed to be used in ESR and therefore may have issues in non-ESR Firefox releases 
- Compatibility with Firefox forks is never guaranteed - minor adjustments will be made by Beautyfox to accommodate itself in Firefox forks, but issues not seen in Firefox may still occur.
- Due to the nature of how their packages are created, Beautyfox **CANNOT** be used in Mozilla Firefox from Flathub nor Ubuntu (and Snap Store). Ubuntu users will have to install Firefox [from the Mozilla PPA](https://launchpad.net/~mozillateam/+archive/ubuntu/ppa#:~:text=sudo%20add%2Dapt%2Drepository%20ppa%3Amozillateam/ppa) in order to use Beautyfox.


# Instructions

**Beautyfox 2.0 is currently an early work in progress and is therefore not available yet - once available, you can download daily builds from Actions.**

> [!WARNING]
> Remember to only get JavaScript-powered Firefox modifications (such as Beautyfox) from sources that you trust, such as [Beautyfox's official repository](https://github.com/dominichayesferen/Beautyfox) - JavaScript-powered modifications have full access to Firefox's functionality, including unrestricted access, to data inside and outside of Firefox, and file manipulation.

> [!NOTE]
> Once running for the first time, Beautyfox will restart Firefox automatically 1-2 times while it sets up required settings, migrations, and so on - if Firefox doesn't re-appear after restarting itself, terminate Firefox and launch it again (that is an upstream bug with Firefox).

## Linux

1. Open Firefox, and in the address bar go to `about:support`
2. Look for `Profile Folder` and next to it press `Open Profile Directory`
3. Copy the `chrome` folder from the `Profile Folder` folder in your copy of Beautyfox to the resulting file manager's window's currently displayed folder
4. Navigate to `File System/usr/lib/firefox` (or `File System/usr/lib/firefox-esr` if using Mozilla Firefox ESR)
5. Copy the contents of the `Firefox Folder` folder in your copy of Beautyfox to the `firefox`/`firefox-esr` folder (if your file manager does not ask for Superuser privilleges automatically, you will need to manually open your File Manager with Superuser privilleges)
6. Back in the Firefox window, scroll to the top, and press `Clear startup cache` followed by confirming the confirmation that then displays
7. You are now running Beautyfox, and will see a setup window appear to start setting up Beautyfox - enjoy!

| ![linux-1](https://github.com/user-attachments/assets/68656e29-1e4f-4140-ba50-3e5386e26344) | ![linux-2](https://github.com/user-attachments/assets/b2a1d60b-64fc-494a-959c-f1adee35d7e6) |
|---|---|
| ![linux-3](https://github.com/user-attachments/assets/b92de8d6-9b73-4495-98eb-53f1fc7cf803) | ![linux-4](https://github.com/user-attachments/assets/78403353-d72f-48d2-9a86-72716338ffba) |

## Windows

1. Open Firefox, and in the address bar go to `about:support`
2. Look for `Profile Folder` and next to it press `Open Profile Directory`
3. Copy the `chrome` folder from the `Profile Folder` folder in your copy of Beautyfox to the resulting File Explorer window's folder
4. Find a Mozilla Firefox shortcut, right-click it and select `Open file location`
5. Copy the contents of the `Firefox Folder` folder in your copy of Beautyfox to the resulting folder (depending on how you installed Firefox, you may need to have administrator privilleges to perform this step)
6. Back in the Firefox window, scroll to the top, and press `Clear startup cache` followed by confirming the confirmation that then displays
7. You are now running Beautyfox, and will see a setup window appear to start setting up Beautyfox - enjoy!

| ![windows-1](https://github.com/user-attachments/assets/3dbc08ff-f78f-4949-ab0d-777620372bdf) | ![windows-2](https://github.com/user-attachments/assets/ed04f856-ea83-4aa3-8739-0c34241454a6) |
|---|---|
| ![windows-3](https://github.com/user-attachments/assets/f7f7f0ab-4bd5-495d-8897-e61e07fdaa49) | ![windows-95](https://github.com/user-attachments/assets/255dab4d-a808-4383-9c8f-4e8c738486b7) |

## macOS

⚠ FOLLOW THE STEPS CAREFULLY - FAILURE TO PERFORM THESE STEPS PROPERLY *WILL* BRICK YOUR CURRENT COPY OF MOZILLA FIREFOX FOR MACOS

1. Open Firefox, and in the address bar go to `about:support`
2. Look for `Profile Folder` and next to it press `Open in Finder`
3. Copy the `chrome` folder from the `Profile Folder` folder in your copy of Beautyfox to the resulting File Explorer window's folder
4. DO NOT QUIT FIREFOX - find your copy of Mozilla Firefox, right-click it and select `Open Package Contents`
5. Go to Contents -> Resources, and then copy the contents of the `Firefox Folder` folder in your copy of Beautyfox to this folder (you will need to merge folders if prompted to)
6. Back in the Firefox window, scroll to the top, and press `Clear startup cache` followed by confirming the confirmation that then displays
7. You are now running Beautyfox, and will see a setup window appear to start setting up Beautyfox - enjoy!

| ![mac-1](https://github.com/user-attachments/assets/683ee47a-d2f6-439f-a7b6-f70c79521572) | ![mac-2](https://github.com/user-attachments/assets/7c1a2aa4-374d-402c-a462-af5e1d11f6f7) |
|---|---|
| ![mac-3](https://github.com/user-attachments/assets/f4f43017-e9ed-4263-8f95-a4072bd2e00e) | ![mac-4](https://github.com/user-attachments/assets/6065ddb9-6a34-4401-8bc9-385bd0b6fbcd) |

# Credits

Credits can be found within Beautyfox Settings's About page upon opening Beautyfox.
