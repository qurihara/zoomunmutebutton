tell application "zoom.us"
activate
delay 0.5
end tell
tell application "System Events"
tell application process "zoom.us"
keystroke "a" using {command down, shift down}
end tell
end tell
