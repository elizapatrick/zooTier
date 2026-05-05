const iconStyle = {
  width: '1em',
  height: '1em',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const adultIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <path d="M12 12a4.2 4.2 0 1 0 0-8.4A4.2 4.2 0 0 0 12 12Z" />
    <path d="M6.5 20.5c.9-3.4 3-5.2 5.5-5.2s4.6 1.8 5.5 5.2" />
  </svg>
)

export const childIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <path d="M7 13.2c.8-3 2.7-4.9 5-4.9s4.2 1.9 5 4.9" />
    <path d="M9 10.1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    <path d="M9 16c.8.9 1.8 1.3 3 1.3s2.2-.4 3-1.3" />
  </svg>
)

export const familyIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <path d="M7.2 13.3a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Zm9.6 0a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z" />
    <path d="M4.8 20.2c.7-2.7 2.4-4.2 4.8-4.2s4.1 1.5 4.8 4.2" />
    <path d="M9.6 20.2c.6-2.1 1.8-3.2 3.4-3.2 1.6 0 2.8 1.1 3.4 3.2" />
  </svg>
)

export const ticketIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <path d="M4.5 8.2a2 2 0 0 0 2-2h11a2 2 0 0 0 2 2v1.5a2 2 0 0 0 0 4.8v1.5a2 2 0 0 0-2 2h-11a2 2 0 0 0-2-2v-1.5a2 2 0 0 0 0-4.8Z" />
    <path d="M9.2 9.4h5.6M9.2 14.6h5.6" />
  </svg>
)

export const checkIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <path d="m5.5 12.5 4 4 9-10" />
  </svg>
)

export const calendarIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <path d="M7 4.5v3M17 4.5v3M4.5 9h15" />
    <rect x="4.5" y="6.5" width="15" height="13" rx="2.2" />
  </svg>
)

export const mailIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true" style={iconStyle}>
    <rect x="4.5" y="6" width="15" height="12" rx="2.2" />
    <path d="m6.5 8.3 5.5 4.2 5.5-4.2" />
  </svg>
)