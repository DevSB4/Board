## Project Overview

This project is a web application that replicates some of the key functionalities of the popular productivity tool **Notion**. It is built using **Next.js** as the framework, **React** for the UI, and includes various libraries for enhanced functionality, like rich text editing, themes, state management, and UI components.

## Features

- **Rich Text Editing**: Powered by `@blocknote/core` and `@blocknote/react`.
- **User Authentication**: Implemented using `@clerk/clerk-react`.
- **File Storage and Management**: Handled by `@edgestore/react` and `@edgestore/server`.
- **Modern UI Components**: Built with Radix UI (`@radix-ui/react`), `clsx`, and `cmdk`.
- **Theming**: Dark/light theme switching supported by `next-themes`.
- **State Management**: Powered by `zustand`.
- **Form Validation**: Using `zod` for schema-based validation.
- **UI Styling**: With **Tailwind CSS** and additional plugins such as `tailwindcss-animate` and `tailwind-merge`.
- **Drag and Drop**: Integrated via `react-dropzone`.
- **Emoji Picker**: Enabled using `emoji-picker-react`.
- **Notifications**: Powered by `sonner`.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) (Version 14.0.3)
- **UI Library**: [React](https://reactjs.org/) (Version 18)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with `tailwindcss-animate`
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Forms & Validation**: [Zod](https://zod.dev/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **File Storage**: [EdgeStore](https://edgestore.dev/)
- **TypeScript**: Strict typing support for enhanced code quality

## Getting Started

### Prerequisites

- Node.js (Version 14 or above)
- npm or yarn package manager

### Installation

1. Clone the repository:
git clone [https://github.com/yourusername/notion-clone.git](https://github.com/DevSB4/Board.git)
cd Board

2. Install dependencies:
```
npm install
# or
yarn install
```

Running the Development Server
Start the development server by running:
```
npm run dev
# or
yarn dev
```

## Contributing

Contributions to the Ticketing System Project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the established coding conventions and guidelines.

## License

This project is licensed under the [MIT License](LICENSE).

