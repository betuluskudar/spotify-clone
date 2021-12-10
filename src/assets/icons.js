import React from 'react';

export const Person = data => (
  <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.866211 18.5909C0.866211 16.7358 1.60315 14.9567 2.9149 13.645C4.22665 12.3332 6.00576 11.5963 7.86086 11.5963C9.71596 11.5963 11.4951 12.3332 12.8068 13.645C14.1186 14.9567 14.8555 16.7358 14.8555 18.5909H0.866211ZM7.86086 10.722C4.96245 10.722 2.61487 8.37438 2.61487 5.47597C2.61487 2.57756 4.96245 0.22998 7.86086 0.22998C10.7593 0.22998 13.1068 2.57756 13.1068 5.47597C13.1068 8.37438 10.7593 10.722 7.86086 10.722Z" fill={data.color || '#9FA6B2'} />
  </svg>
);


// sidebar
export const Home = data => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M14.8319 15.5999H9.51823V10.1999H6.48182V15.5999H1.16815V4.37613L8.00003 0.399902L14.8319 4.34901V15.5999Z" fill={data.color || 'white'} />
  </svg>
);

export const Search = data => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M11.7203 11.2772L14.9888 15.1127L14.4219 15.5999L11.1445 11.7645C10.0166 12.6207 8.74698 13.0488 7.33563 13.0488C6.47936 13.0488 5.66001 12.882 4.87759 12.5484C4.09517 12.2147 3.42198 11.7659 2.85801 11.202C2.29404 10.638 1.84524 9.96484 1.51163 9.18239C1.17801 8.39995 1.01119 7.5806 1.01117 6.72436C1.01115 5.86811 1.17797 5.04877 1.51163 4.26633C1.84529 3.48388 2.29408 2.81069 2.85801 2.24674C3.42193 1.68279 4.09513 1.234 4.87759 0.900361C5.66006 0.566722 6.47941 0.399902 7.33563 0.399902C8.19185 0.399902 9.01119 0.566722 9.79366 0.900361C10.5761 1.234 11.2493 1.68279 11.8132 2.24674C12.3772 2.81069 12.826 3.48388 13.1596 4.26633C13.4933 5.04877 13.6601 5.86811 13.6601 6.72436C13.6601 7.60423 13.4888 8.43686 13.1463 9.22226C12.8038 10.0077 12.3285 10.6927 11.7202 11.2773L11.7203 11.2772ZM7.3357 12.3047C8.34547 12.3047 9.27849 12.0552 10.1348 11.5562C10.991 11.0572 11.6687 10.3796 12.1676 9.52336C12.6666 8.66711 12.9161 7.73409 12.9161 6.72429C12.9162 5.71449 12.6667 4.78147 12.1676 3.92522C11.6686 3.06898 10.991 2.39137 10.1348 1.89238C9.27854 1.3934 8.34552 1.14391 7.3357 1.14391C6.32587 1.14391 5.39285 1.3934 4.53663 1.89238C3.68041 2.39137 3.0028 3.06898 2.50379 3.92522C2.00479 4.78147 1.75529 5.71449 1.75532 6.72429C1.75534 7.73409 2.00483 8.66711 2.50379 9.52336C3.00275 10.3796 3.68036 11.0572 4.53663 11.5562C5.3929 12.0552 6.32592 12.3047 7.3357 12.3047Z" fill={data.color || 'white'} />
  </svg>
);

export const Library = data => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.6" d="M9.17679 0.65976L15.6 15.0851L14.8548 15.4185L8.43153 0.993184L9.17679 0.65976ZM0.400024 15.4087V0.581299H1.22379V15.4087H0.400024ZM5.34249 15.4087V0.581299H6.16626V15.4087H5.34249Z" fill={data.color || 'white'} />
  </svg>

)

export const Filter = data =>(
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1737:534)">
  <path d="M5.87922 8.92126L1.8132 2.60441H1V0.919922H15.6377V2.60441H14.8245L10.7584 8.92126V16.0804H5.87922V8.92126ZM1.51884 1.45299V2.08998H2.03888L6.3763 8.92126V15.5471H10.2557V8.92126L14.6494 2.07455H15.1235V1.45299H1.51884Z" fill="white"/>
  </g>
  <defs>
  <clipPath id="clip0_1737:534">
  <rect width="16" height="16" fill={data.color || 'white'}/>
  </clipPath>
  </defs>
  </svg>

)
export const BackArrow = data =>(
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#030303"/>
    <path opacity="0.7" d="M19.1728 23.5999L10.2734 15.9999L19.1728 8.3999L19.7266 9.04744L11.5855 15.9999L19.7266 22.9524" fill={data.color || 'white'}/>
  </svg>
)

export const NextArrow = data => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#030303"/>
    <path opacity="0.7" d="M12.8272 23.5999L12.2734 22.9524L20.4145 15.9999L12.2734 9.04744L12.8272 8.3999L21.7266 15.9999" fill={data.color || 'white'}/>
  </svg>

)

export const Play = data => (
  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.0824 8.0001L1.91754 15.6001V0.400097L15.0824 8.0001Z" fill={data.color || 'white'}/>
  </svg>

)

export const Like = data => (  
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M7.6335 4.12072L8 4.51564L8.3665 4.12072L8.91212 3.53278C10.1564 2.19195 12.2047 2.15185 13.4966 3.44081C14.7985 4.7398 14.8392 6.89535 13.5853 8.24649L8.3665 13.87C8.16866 14.0832 7.83134 14.0832 7.6335 13.87L2.4147 8.24649C1.16081 6.89536 1.20146 4.7398 2.50339 3.44081C3.79527 2.15185 5.84356 2.19195 7.08788 3.53278L7.6335 4.12072Z" stroke={data.color || 'white'} stroke-linecap="round"/>
  </svg>

)

export const CreditCard = data => (  
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M1.35002 3.25005V11.8H14.65V3.25005H1.35002ZM1.35002 2.30005H14.65C14.902 2.30005 15.1436 2.40014 15.3218 2.5783C15.4999 2.75646 15.6 2.99809 15.6 3.25005V12.75C15.6 13.002 15.4999 13.2436 15.3218 13.4218C15.1436 13.6 14.902 13.7 14.65 13.7H1.35002C1.09807 13.7 0.856433 13.6 0.678273 13.4218C0.500113 13.2436 0.400024 13.002 0.400024 12.75V3.25005C0.400024 2.99809 0.500113 2.75646 0.678273 2.5783C0.856433 2.40014 1.09807 2.30005 1.35002 2.30005Z" fill="white"/>
    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M9.90002 8H13.7V10.85H9.90002V8Z" fill={data.color || 'white'}/>
  </svg>
  )

export const PriSong = data => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M2.15179 6.50005L12.8483 12.675L12.8483 0.325048L2.15179 6.50005Z" fill="white"/>
      <rect x="2" y="12" width="2" height="11" transform="rotate(180 2 12)" fill={data.color || 'white'}/>
    </g>
  </svg>
)

export const SongPlay = data => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7">
      <circle cx="18" cy="18" r="17.5" stroke="white"/>
      <path d="M24.8482 18.5L14.1517 12.325V24.675L24.8482 18.5Z" fill={data.color || 'white'}/>
    </g>
  </svg>
)

export const NextSong = data => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.6">
      <path d="M11.8482 6.49995L1.15173 0.324951V12.675L11.8482 6.49995Z" fill="white"/>
      <rect x="12" y="1" width="2" height="11" fill={data.color || 'white'}/>
    </g>
  </svg>

)

export const Arrow = data => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.37375 13.4888L7.81097 14L14.8368 8L7.81097 2L7.37375 2.51121L13.4311 7.68421H1V8.31579H13.4311L7.37375 13.4888Z" fill={data.color || 'White'}/>
  </svg>
  )