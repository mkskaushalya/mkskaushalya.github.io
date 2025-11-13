import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-blue-400 text-white hover:bg-blue-500 shadow-lg hover:shadow-xl hover:scale-105",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl hover:scale-105",
        outline:
          "border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white shadow-md hover:shadow-lg hover:scale-105",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-105",
        ghost: "text-blue-400 hover:bg-blue-400/10 hover:scale-105",
        link: "text-blue-400 underline-offset-4 hover:underline hover:scale-105",
        gradient:
          "bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg hover:shadow-xl hover:scale-105",
        success:
          "bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl hover:scale-105",
        warning:
          "bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
