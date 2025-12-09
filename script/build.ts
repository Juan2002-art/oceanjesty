import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function build() {
  try {
    console.log("🔨 Building frontend...");
    await rm("dist", { recursive: true, force: true }).catch(() => {});
    await viteBuild();
    console.log("✅ Build success");
  } catch (error) {
    console.error("❌ Build failed:", error);
    process.exit(1);
  }
}

build();
