/* Shared inline SVG icon set used across landing and auth pages */
export const Icon = {
  Logo: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7 14c2-1.5 3.5-1.5 5 0s3 1.5 5 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9" r="1.4" fill="currentColor" />
    </svg>
  ),
  Play: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  ),
  Pause: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="6" y="5" width="4" height="14" rx="1" />
      <rect x="14" y="5" width="4" height="14" rx="1" />
    </svg>
  ),
  Prev: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 6h2v12H6zM20 6L9 12l11 6V6z" />
    </svg>
  ),
  Next: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16 6h2v12h-2zM4 6l11 6L4 18V6z" />
    </svg>
  ),
  Headphones: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M4 14v-2a8 8 0 1116 0v2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <rect x="3" y="13" width="5" height="8" rx="2" fill="currentColor" />
      <rect x="16" y="13" width="5" height="8" rx="2" fill="currentColor" />
    </svg>
  ),
  Sparkles: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 2l1.8 4.6L18 8l-4.2 1.4L12 14l-1.8-4.6L6 8l4.2-1.4L12 2zM19 14l1 2.4 2.4 1-2.4 1L19 21l-1-2.6-2.4-1 2.4-1L19 14zM5 14l1 2.4 2.4 1-2.4 1L5 21l-1-2.6L1.6 18.4 4 17.4 5 14z"
        fill="currentColor"
      />
    </svg>
  ),
  Wave: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 12h2M7 8v8M11 5v14M15 8v8M19 11v2M21 12h-0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Mic: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="9"
        y="3"
        width="6"
        height="11"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 11a7 7 0 0014 0M12 18v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Users: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6M15 20c0-2 1.5-4 4-4s3 2 3 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Heart: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 21s-7-4.5-9.3-9.1C1 8.3 3 4.5 6.8 4.5c2 0 3.6 1.1 4.7 2.6 1.1-1.5 2.7-2.6 4.7-2.6 3.8 0 5.8 3.8 4.1 7.4C19 16.5 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Download: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Apple: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 13c0-2.4 2-3.6 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.5-.1-2.8.9-3.5.9s-1.8-.9-3-.9c-1.6 0-3 .9-3.8 2.4-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 3 2.3 1.2-.1 1.6-.8 3.1-.8s1.8.8 3 .8c1.3 0 2.1-1.1 2.9-2.3.7-1 1-1.9 1.4-3-3-.9-2.9-4.3-2.9-4.3zM14 5.7c.7-.8 1.1-1.9 1-3-1 .1-2.1.7-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.5 2.8-1.3z" />
    </svg>
  ),
  Android: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 17h18a9 9 0 00-3.6-7.2l1.2-2a.5.5 0 10-.9-.4l-1.2 2A9 9 0 0012 8c-1.6 0-3 .4-4.3 1.1L6.4 7.2a.5.5 0 00-.9.4l1.2 2A9 9 0 003 17zm6-4a1 1 0 110-2 1 1 0 010 2zm6 0a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
  ),
  Arrow: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Plus: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  Share: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 4v10m0-10l-3 3m3-3l3 3M5 13v5a2 2 0 002 2h10a2 2 0 002-2v-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Chevron: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Sun: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Moon: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Mail: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  User: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M4 21c0-4 3.6-7 8-7s8 3 8 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Lock: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="4"
        y="10"
        width="16"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 10V7a4 4 0 018 0v3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Eye: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  EyeOff: (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 3l18 18M10.6 6.2A10.9 10.9 0 0112 6c6.4 0 10 7 10 7a14.7 14.7 0 01-3.1 4.1M6.5 7.9C3.4 9.9 2 12 2 12s3.6 7 10 7c1.6 0 3-.4 4.2-1M9.9 9.9a3 3 0 004.2 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  Google: (props) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.3 14.6 2.3 12 2.3 6.5 2.3 2 6.8 2 12.3s4.5 10 10 10c5.8 0 9.6-4 9.6-9.7 0-.7-.1-1.2-.2-1.7H12z"
      />
      <path
        fill="#4285F4"
        d="M21.6 12.6c0-.7-.1-1.2-.2-1.7H12v3.9h5.5c-.2 1.4-1.6 4.1-5.5 4.1v.5l3.5 2.7.2.1c2.2-2 3.9-5 3.9-9.6z"
      />
      <path
        fill="#FBBC05"
        d="M6.5 14.3a6.2 6.2 0 010-4l-3.6-2.8a10 10 0 000 9.6l3.6-2.8z"
      />
      <path
        fill="#34A853"
        d="M12 22.3c2.7 0 5-.9 6.7-2.4l-3.5-2.7c-1 .7-2.2 1.1-3.2 1.1-3 0-5.5-2-6.4-4.7l-3.6 2.8C3.7 19.7 7.5 22.3 12 22.3z"
      />
    </svg>
  ),
}
