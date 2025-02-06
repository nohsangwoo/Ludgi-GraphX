# Ludgi GraphX

```
██╗     ██╗   ██╗██████╗  ██████╗ ██╗
██║     ██║   ██║██╔══██╗██╔════╝ ██║
██║     ██║   ██║██║  ██║██║  ███╗██║
██║     ██║   ██║██║  ██║██║   ██║██║
███████╗╚██████╔╝██████╔╝╚██████╔╝██║
╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝ ╚═╝
Automate GraphQL API Generation with Ludgi GraphX
```

## 🚀 Ludgi GraphX - The Ultimate GraphQL API Generator

**Ludgi GraphX** is a powerful and seamless GraphQL API automation tool built on **Next.js** and **Express**. It leverages the **[Ludgi CLI](https://www.npmjs.com/package/ludgi-cli)** to generate and manage GraphQL queries and mutations effortlessly, saving development time while ensuring a structured and maintainable GraphQL architecture.

---

## 🌟 Why Ludgi GraphX?

- **🚀 Full Automation** - Automatically generate all GraphQL queries and mutations with a single command.
- **🔥 Express + Next.js Power** - Combines the best of **Express** (backend) and **Next.js** (frontend) for seamless integration.
- **⚡ Fast Development** - Rapidly prototype and manage GraphQL resources without repetitive manual coding.
- **🔧 Intuitive CLI Integration** - Uses the robust **Ludgi CLI** for query/mutation generation, listing, and deletion.
- **🛠️ Developer-Friendly** - Provides interactive and animated CLI feedback for an enhanced experience.

---

## 📌 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22 or later)
- **npm** (or yarn/pnpm)
- **Ludgi CLI** (installed automatically with this project)

---

## 📥 Installation

To get started with **Ludgi GraphX**, install it as a dependency:

```bash
npx create-ludgi-graphx my-graphql-project
cd my-graphql-project
npm install
```

This will scaffold a complete **GraphQL API automation** project with Express and Next.js.

---

⚠️ Prerequisites:
This application requires the following Docker containers to be running:

- Redis

The application will not function properly unless these services are running.

**Note:** If you want to use subscriptions with Ludgi CLI, it is configured to work based on Redis. Therefore, make sure Redis is running to enable this feature.

---

### Start Redis Container

```bash
sh docker-compose/redis/up.sh
```

## ⚙️ Usage

### 1️⃣ Generate a GraphQL Query or Mutation

Use **Ludgi CLI** to generate a new GraphQL query or mutation file:

```bash
npx ludgi-cli -n <queryOrMutationName>
```

Example:

```bash
npx ludgi-cli -n getUserProfile
```

This will create a new GraphQL file inside the **GraphQL directory** of your project.

---

### 2️⃣ List All GraphQL Queries & Mutations

```bash
npx ludgi-cli -l
```

This command will display all GraphQL queries and mutations present in your project.

---

### 3️⃣ Delete a GraphQL Query or Mutation

```bash
npx ludgi-cli -d <queryOrMutationName>
```

Example:

```bash
npx ludgi-cli -d getUserProfile
```

This removes the specified GraphQL file from your project.

---

## 🏗️ Project Structure

Ludgi GraphX provides a structured GraphQL project setup:

```
my-graphql-project/
│── graphql/                # Auto-generated GraphQL queries/mutations
│   ├── queries/
│   ├── mutations/
│── pages/api/graphql.js    # GraphQL API handler for Next.js
│── server/                 # Express-based GraphQL server
│── package.json            # Project dependencies and scripts
```

---

## 📌 Example GraphQL Query

When you generate a query using Ludgi CLI, it follows this structure:

```graphql
query GetUserProfile($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```

Similarly, mutations are structured as:

```graphql
mutation UpdateUser($id: ID!, $name: String!) {
  updateUser(id: $id, name: $name) {
    id
    name
  }
}
```

---

## 🚀 Running the Project

### Start ludgi-graphx server
```bash
npm run dev
```

---

## 🌍 API Endpoints

| Method | Endpoint           | Description |
|--------|-------------------|-------------|
| `POST` | `/api/graphql`    | GraphQL API Handler |
| `GET`  | `/api/ping`     | Health Check |

---

## 🌟 Get Started Today!

Simplify your **GraphQL API development** with **Ludgi GraphX**. 🚀

```bash
git clone https://github.com/nohsangwoo/Ludgi-GraphX.git
cd Ludgi-GraphX
pnpm install
pnpm run dev
```

Ready to build scalable, automated GraphQL APIs? **Start now with Ludgi GraphX!** 💡

