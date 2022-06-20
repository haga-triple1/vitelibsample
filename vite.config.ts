
import { defineConfig } from 'vite';
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    return mode === "production" ? {
        build: {
            rollupOptions: {
                input: {
                    entrypoint1: path.resolve(__dirname,"src","1.ts"),
                    entrypoint2: path.resolve(__dirname,"src","2.ts")
                },
                output: {
                    entryFileNames: ({name}) => name + ".js",
                },
            }
        }
    } : {
        build: {
            rollupOptions: {
                input: {
                    1: path.resolve(__dirname,"mock","1.html"),
                    2: path.resolve(__dirname,"mock","2.html")
                },
            }
        }
    };
  });

