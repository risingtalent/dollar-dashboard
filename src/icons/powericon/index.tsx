import * as React from "react"

type HomePageProps = {

  theme: string
};

function PowerIcon({ theme }: HomePageProps) {

  function powerIcon(){
    if (theme === 'light') return("#F2F2F2") ;

    else return("#292929")  ;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
   
    >
      <rect width={26} height={26} rx={13} fill={powerIcon()} />
      <path
        d="M11.778 12.453V6.458a1.2 1.2 0 012.397 0v5.995a1.2 1.2 0 01-2.397 0zm5.95-5.436a.9.9 0 00-1.113 1.412 5.855 5.855 0 012.244 4.623 5.89 5.89 0 01-5.882 5.883 5.89 5.89 0 01-5.882-5.883c0-1.812.817-3.496 2.242-4.62a.9.9 0 00-1.115-1.413 7.643 7.643 0 00-2.926 6.033c0 4.236 3.446 7.68 7.68 7.68 4.235 0 7.681-3.445 7.681-7.68a7.646 7.646 0 00-2.928-6.035z"
        fill="#f40136"
      />
    </svg>
  )
}

export default PowerIcon
