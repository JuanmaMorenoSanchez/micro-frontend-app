# Angular Micro-Frontend Application

This repository demonstrates an Angular application utilizing a micro-frontend architecture with three distinct apps: `shell`, `component1`, and `component2`.
## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/JuanmaMorenoSanchez/micro-frontend-app.git
   cd micro-frontend-app

2. **Install**:
   npm install

3. **Run**:
    ng serve shell
    ng serve component1
    ng serve component2

    They should be running by default in ports 4200. 4201 and 4202


## Project Structure

The repository is organized as follows:

```
root/
├── angular.json
├── package.json
├── tsconfig.json
└── projects/
    ├── shell/
    ├── component1/
    └── component2/
```

- **root/**: Contains global configuration files and settings for the Angular workspace.
- **projects/**: Houses the individual Angular projects:
  - **shell/**: The main application acting as the host.
  - **component1/**: A micro-frontend application.
  - **component2/**: Another micro-frontend application.

## Routing Structure

The application's routing is configured as follows:

- `/home`: Loads the `HomeComponent` from the `shell` application.
- `/about`: Loads `About` from the `shell`  application.
- `/pageA`: Loads `PageAComponent` from `component1` application.
- `/pageB`: Loads `PageBComponent` from `component1` application.
- `/pageC`: Loads `PageCComponent` from `component2` application.
- `/pageD`: Loads `PageDComponent` from `component2` application.


## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [Angular CLI](https://angular.io/cli) (version 12.x or later)

