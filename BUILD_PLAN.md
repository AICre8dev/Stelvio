# Build Plan

- Service Cards: Each card uses a unique video source (cleaning.mp4, moving.mp4, laundry.mp4) except Furniture Cleaning which uses a static Unsplash image
- App Download section: Replace composite screenshot cropping with 4 separate hosted PNG images from stelvio-videos.netlify.app
- Phone mockup displays app-home.png, app-booking.png, app-notifications.png, app-account.png stacked vertically
- Images scroll upward continuously inside iPhone-styled frame with overflow:hidden and rounded corners
- 20-second smooth infinite CSS animation cycle with pauses on each screen
- Phone frame has Dynamic Island notch, home indicator, and white border for realistic iPhone appearance
