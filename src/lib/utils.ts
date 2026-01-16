/**
 * Utility for merging class names (simple replacement for clsx/cn)
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Format a number with commas for display
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Debounce function for search inputs
 */
export function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Download a string as a file
 */
export function downloadFile(
  content: string,
  filename: string,
  mimeType: string = "text/xml",
): void {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Read a file as text
 */
export function readFileAsText(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsText(file);
  });
}

/**
 * Validate file extension
 */
export function isValidSaveFile(file: File): boolean {
  const validExtensions = [".xml"];
  const fileName = file.name.toLowerCase();
  return validExtensions.some((ext) => fileName.endsWith(ext));
}

/**
 * Get DLC display badge color
 */
export function getDLCColor(
  dlc: string,
): "default" | "primary" | "secondary" | "lunar" | "void" {
  switch (dlc) {
    case "base":
      return "default";
    case "sotv":
      return "void";
    case "sots":
      return "secondary";
    case "ac":
      return "primary";
    default:
      return "default";
  }
}

/**
 * Get category icon name (for lucide-react)
 */
export function getCategoryIcon(category: string): string {
  switch (category) {
    case "survivors":
      return "Users";
    case "skills":
      return "Zap";
    case "skins":
      return "Palette";
    case "items":
      return "Package";
    case "artifacts":
      return "Gem";
    default:
      return "Circle";
  }
}
