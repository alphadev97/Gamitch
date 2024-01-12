# Gamitch - Twitch Clone

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

Gamitch is a Twitch clone built with Next.js, incorporating features like live streaming, chat, and user authentication. It leverages various libraries and services to provide a seamless user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Technologies](#technologies)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/gamitch.git
```

2. Install dependencies:

```bash
cd gamitch
npm install
```

3. Run the development server:

```bash
npm run dev
```

Visit http://localhost:3000 to view your application.

## Usage

Gamitch provides a sophisticated Twitch-like experience, offering users the capability to engage in live streaming, manage their audience through Clerk authentication, and tailor streaming preferences from a centralized dashboard. Follow these steps to optimize your usage of the platform:

1. **Live Streaming:**

   - Initiate live streams effortlessly, delivering a real-time broadcasting experience to your audience.

2. **User Management via Clerk:**

   - Seamlessly manage users through Clerk authentication, ensuring a secure and authenticated streaming environment.

3. **Dashboard:**

   - Access a centralized dashboard for a streamlined experience.
   - Customize settings, manage live stream keys compatible with software like OBS, and efficiently initiate and monitor live streams.

4. **Chat Customization:**

   - Enhance viewer engagement by customizing chat options.
   - Configure chat settings, including options for followers-only, disable chat, or enable slow mode.

5. **Community Features:**
   - Explore the community tab on the dashboard to identify and interact with viewers.
   - Manage user interactions by blocking or unblocking users as needed, providing a personalized and controlled streaming environment.

Gamitch empowers content creators with robust features, fostering a dynamic and interactive streaming experience for both broadcasters and viewers.

## Environment Variables

Make sure to set up the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
CLERK_WEBHOOK_SECRET=

DATABASE_URL=

LIVEKIT_API_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_WS_URL=

UPLOADTHING_SECRET=
```

## Technologies

- Next.js
- Clerk (Authentication)
- LiveKit (Live Streaming)
- Prisma (Database)
- Tailwind CSS (Styling)
- and more...

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/alphadev97/Gamitch/blob/main/LICENSE) file for details.

**NOTE:**
This app utilizes the LiveKit connection for its live streaming functionality and comes with a free trial. If you encounter any issues with the live version, consider using your own LiveKit API for a smoother experience. Refer to the [LiveKit Next.js Quickstart Guide](https://docs.livekit.io/realtime/quickstarts/nextjs-13/) for detailed setup instructions.
