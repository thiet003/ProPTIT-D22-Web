1. create-react-app
2. npm install @shadcn/ui
3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p (gen 1 cái file tailwind.config.js)

   1. Thay cái này vào file trên:

      1. ```js
         /** @type {import('tailwindcss').Config} */
         module.exports = {
           content: ["./src/**/*.{js,jsx,ts,tsx}"],
           theme: {
             extend: {},
           },
           plugins: [],
         };
         ```

      ```

      ```

   2. Add vào trong file src/index.css:

      1. ```js
           @tailwind base;
           @tailwind components;
           @tailwind utilities;
         ```

      ```

      ```

5. Chạy thôi...........

# II.

1. npx create-react-app my-shadcn-app
2. cd my-shadcn-app
3. npm install -D tailwindcss postcss autoprefixer
4. npx tailwindcss init -p
5. Add vô: file tailwind config:
   1. ```js
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        darkMode: ["class"],
        content: [
          "./pages/**/*.{ts,tsx}",
          "./components/**/*.{ts,tsx}",
          "./app/**/*.{ts,tsx}",
          "./src/**/*.{ts,tsx}",
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
      };
      ```
6. Add vào src/index.js:

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

7. cài shadcn/ui cli:
   1. npx shadcn@latest init
8. Cài shadcn/ui vào project:
   1. npx shadcn-ui@0.8.0 init //dùng pb cũ ko là lỗi đấy
9. Cài component:
   1. npx shadcn@0.8.0 add button
10. Có thể thiếu file tsconfig.json, tạo và xem ng ta add j vô
