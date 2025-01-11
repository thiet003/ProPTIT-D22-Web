1. npm create vite@latest my-app -- --template react-ts
- cd my-app
2. npm install -D tailwindcss postcss autoprefixer @types/node
3. npm install class-variance-authority clsx tailwind-merge
4. npx tailwindcss init -p
5. update file : tailwind.config.js
   - ```js
        /** @type {import('tailwindcss').Config} */
        module.exports = {
        darkMode: ["class"],
        content: [
            './pages/**/*.{ts,tsx}',
            './components/**/*.{ts,tsx}',
            './app/**/*.{ts,tsx}',
            './src/**/*.{ts,tsx}',
            ],
        theme: {
            container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
            },
            extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                DEFAULT: "hsl(var(--primary))",
                foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                DEFAULT: "hsl(var(--secondary))",
                foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                DEFAULT: "hsl(var(--destructive))",
                foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                DEFAULT: "hsl(var(--muted))",
                foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                DEFAULT: "hsl(var(--accent))",
                foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                DEFAULT: "hsl(var(--popover))",
                foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                DEFAULT: "hsl(var(--card))",
                foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                from: { height: 0 },
                to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            },
        },
        plugins: [require("tailwindcss-animate")],
        }
    ```
6. update file: tsconfig.json
   - ```json
        {
            "compilerOptions": {
                "target": "ES2020",
                "useDefineForClassFields": true,
                "lib": ["ES2020", "DOM", "DOM.Iterable"],
                "module": "ESNext",
                "skipLibCheck": true,

                /* Bundler mode */
                "moduleResolution": "bundler",
                "allowImportingTsExtensions": true,
                "resolveJsonModule": true,
                "isolatedModules": true,
                "noEmit": true,
                "jsx": "react-jsx",

                /* Linting */
                "strict": true,
                "noUnusedLocals": true,
                "noUnusedParameters": true,
                "noFallthroughCasesInSwitch": true,

                /* Shadcn */
                "baseUrl": ".",
                "paths": {
                "@/*": [
                    "./src/*"
                ]
                }
            },
            "include": ["src"],
            "references": [{ "path": "./tsconfig.node.json" }]
        }
        ```
7. update file: vite.config.ts
   - ```ts
        import path from "path"
        import react from "@vitejs/plugin-react"
        import { defineConfig } from "vite"

        export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
            "@": path.resolve(__dirname, "./src"),
            },
        },
        })
    ```
8. update file src/index.css:
   1. ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
        @layer base {
        :root {
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;

            --card: 0 0% 100%;
            --card-foreground: 222.2 84% 4.9%;
        
            --popover: 0 0% 100%;
            --popover-foreground: 222.2 84% 4.9%;
        
            --primary: 222.2 47.4% 11.2%;
            --primary-foreground: 210 40% 98%;
        
            --secondary: 210 40% 96.1%;
            --secondary-foreground: 222.2 47.4% 11.2%;
        
            --muted: 210 40% 96.1%;
            --muted-foreground: 215.4 16.3% 46.9%;
        
            --accent: 210 40% 96.1%;
            --accent-foreground: 222.2 47.4% 11.2%;
        
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 210 40% 98%;

            --border: 214.3 31.8% 91.4%;
            --input: 214.3 31.8% 91.4%;
            --ring: 222.2 84% 4.9%;
        
            --radius: 0.5rem;
        }
        
        .dark {
            --background: 222.2 84% 4.9%;
            --foreground: 210 40% 98%;
        
            --card: 222.2 84% 4.9%;
            --card-foreground: 210 40% 98%;
        
            --popover: 222.2 84% 4.9%;
            --popover-foreground: 210 40% 98%;
        
            --primary: 210 40% 98%;
            --primary-foreground: 222.2 47.4% 11.2%;
        
            --secondary: 217.2 32.6% 17.5%;
            --secondary-foreground: 210 40% 98%;
        
            --muted: 217.2 32.6% 17.5%;
            --muted-foreground: 215 20.2% 65.1%;
        
            --accent: 217.2 32.6% 17.5%;
            --accent-foreground: 210 40% 98%;
        
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 210 40% 98%;
        
            --border: 217.2 32.6% 17.5%;
            --input: 217.2 32.6% 17.5%;
            --ring: 212.7 26.8% 83.9%;
        }
        }
        
        @layer base {
        * {
            @apply border-border;
        }
        body {
            @apply bg-background text-foreground;
        }
        }
    ```
9. npx shadcn@latest init
10. add component vào để....
11. COmpleted