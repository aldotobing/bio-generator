#Bio Generator

This project is an AI-powered Bio & Cover Letter Generator built with Next.js and TypeScript. It allows users to generate compelling bios and cover letters based on their role, vibe, and additional context using AI.

## Features

- Generate LinkedIn bios based on user input
- Choose from different vibes (Professional, Creative, Casual, etc.)
- Copy generated bios to clipboard
- Responsive design

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aldotobing/linkedin-bio-generator.git
   cd linkedin-bio-generator
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

To build the project for production, run:

```bash
npm run build
# or
yarn build
```

### Exporting Static Files

To export the project as static files for GitHub Pages, run:

```bash
npm run export
# or
yarn export
```

### Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```
NEXT_PUBLIC_API_ENDPOINT=<your_api_endpoint>
```

## Usage

1. Enter your role in the input field.
2. Choose a vibe that best suits your personality or job role.
3. Add any additional context or details.
4. Click the "Generate Bio" button to create your LinkedIn bio.
5. Copy the generated bio to your clipboard using the "Copy to Clipboard" button.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Deployment

This project is deployed to GitHub Pages using GitHub Actions. The deployment workflow is defined in `.github/workflows/deploy.yml`.

## License

This project is licensed under the [MIT License](./LICENSE).

