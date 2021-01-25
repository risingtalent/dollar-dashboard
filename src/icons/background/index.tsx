import * as React from "react"
import './styles.css'



type HomePageProps = {

  theme: string
};

function Background({ theme }: HomePageProps) {

  function backgroundColor(){
    if (theme === 'light') return("#F40036") ;

    else return("#151515")  ;
  }



  return (

   
    <svg
      style={{  width:"100vw",  minHeight:'458px', position: 'relative'}}
      viewBox="0 0 1152 459"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"


    >
      <path
        d="M1152.01 459v-56.114c-34.52 2.222-69.01 4.769-103.53 6.798-37.59 2.198-75.134 4.877-112.692 7.375-5.562.372-9.285-1.597-10.138-7.326-2.558-17.14-5.705-34.159-10.305-50.889-1.226-4.456.144-7.783 4.924-9.249 2.138-.66 4.228-1.465 6.39-1.993 28.887-7.111 57.389-15.614 86.091-23.361 39.27-10.593 78.43-21.583 117.65-32.32 7.21-1.97 14.42-3.952 21.64-5.934V169.112c-19.19 7.867-38.37 15.734-57.56 23.577-67.67 27.672-135.331 55.369-202.881 83.33-5.598 2.318-9.033 1.585-12.204-3.928-8.023-13.944-17.044-27.252-27.097-39.863-6.041-7.579-5.693-9.332 2.282-14.473 11.447-7.386 23.038-14.545 34.58-21.775 65.701-41.196 131.01-83.005 196.61-124.358 22.11-13.932 44.19-27.948 66.25-41.953V1H985.309c-25.427 21.98-50.927 43.863-76.438 65.746-37.199 31.888-74.313 63.872-111.632 95.628-4.913 4.18-8.564 4.432-13.621.589-13.416-10.185-27.037-20.13-41.822-28.297-4.889-2.691-5.658-5.285-1.982-9.825 17.464-21.523 35.168-42.842 52.789-64.244A33241.23 33241.23 0 01841.8.987H719.995c-17.98 31.06-35.925 62.132-53.845 93.227-2.679 4.648-5.79 6.342-10.907 4.949-16.983-4.648-34.195-8.252-51.72-10.245-5.573-.637-7.855-3.772-7.086-9.165 3.087-21.523 5.285-43.166 8.216-64.713.636-4.684 1.249-9.368 1.861-14.052H504.167l.217 1.49c3.699 25.69 7.843 51.308 11.206 77.047.697 5.369-.144 8.72-6.138 9.428-17.007 2.018-33.787 5.201-50.206 10.114-5.838 1.741-9.729.288-12.996-5.153A29941.595 29941.595 0 00390.422 1H267.908c4.817 5.645 9.633 11.29 14.45 16.947a23884.484 23884.484 0 0152.765 62.299c12.768 15.133 25.8 30.026 38.279 45.4 2.607 3.207 3.664 6.053-.576 8.539-15.639 9.165-30.473 19.482-44.826 30.507-3.615 2.775-7.026 2.751-10.678-.468-5.741-5.081-11.831-9.777-17.656-14.773-27.818-23.853-55.768-47.55-83.79-71.15-23.854-20.083-47.888-39.96-71.502-60.306A2425.774 2425.774 0 00124.423 1H.012v55.237a10691.757 10691.757 0 0093.098 58.515c32.611 20.262 64.981 40.884 97.615 61.098 23.373 14.473 46.639 29.138 69.845 43.887 4.672 2.967 5.981 5.921 2.246 10.773-10.426 13.524-20.648 27.228-28.947 42.218-2.799 5.056-6.486 6.197-11.735 3.735-19.746-9.248-39.985-17.355-59.936-26.135-42.639-18.737-85.495-36.993-128.255-55.465-11.302-4.888-22.616-9.765-33.931-14.653v111.482c15.362 4.492 30.7 9.056 46.05 13.572 22.786 6.714 45.427 13.957 68.296 20.274 24.803 6.846 49.462 14.185 74.301 20.899 11.326 3.062 13.044 6.606 8.648 17.787a18.27 18.27 0 00-.841 2.835c-3.867 13.103-5.657 26.651-8.312 39.995.589 10.449-1.009 12.095-11.614 11.53-8.108-.432-16.215-.912-24.311-1.417-40.766-2.834-81.532-5.681-122.297-8.479-9.97-.685-19.95-1.346-29.932-2.018v52.306h1152.01V459z"
        fill={backgroundColor()}
      />
    </svg>

  );
}


export default Background;