import React, {useRef} from 'react'

const Header = () => {

    return (
        <div className='sticky top-0 h-20 z-20 bg-white'>

            <div className='flex items-center px-8 h-full'>
                <div className='flex border-r h-full items-center'>
                    <svg width="30" height="30" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fillRule="evenodd" clip-rule="evenodd" d="M18.1001 21.0338C17.8129 21.0335 17.5397 20.9066 17.3501 20.6855L13.4901 16.209C11.1084 17.746 8.13978 17.9803 5.55629 16.8353C2.9728 15.6902 1.10712 13.3133 0.570115 10.4826C-0.135289 6.82952 1.48592 3.11798 4.61497 1.22247C7.74402 -0.67304 11.7 -0.34006 14.4851 2.05325C17.2701 4.44655 18.2782 8.37939 17.0001 11.8656C16.8041 12.3945 16.2265 12.6605 15.7101 12.4597C15.1937 12.2589 14.9341 11.6672 15.1301 11.1382C15.8793 9.09652 15.6162 6.80948 14.4241 5.00217C13.232 3.19485 11.2588 2.09141 9.13011 2.04165C7.14493 1.97916 5.24202 2.8556 3.97011 4.41824C1.90098 6.95238 1.93334 10.6503 4.04647 13.146C6.15961 15.6418 9.72865 16.1973 12.4701 14.4573C13.304 13.955 14.3693 14.1362 15.0001 14.8875L18.8601 19.3641C19.1192 19.6662 19.1818 20.0955 19.0202 20.462C18.8585 20.8284 18.5026 21.0641 18.1101 21.0646L18.1001 21.0338Z" fill="#0F1E36" />
                    </svg>
                    <input className='outline-none border-none ml-3 w-[400px]' placeholder='Search your entertainment' type="text" name="search" id="search" />
                </div>
                <div className='border-r px-10 h-full items-center justify-center flex'>
                    <svg width="30" height="30" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M24.7424 13.729V3.16824C24.7424 1.41847 23.3577 0 21.6496 0H3.0928C1.3847 0 0 1.41847 0 3.16824V13.729C0 15.4788 1.3847 16.8973 3.0928 16.8973C3.66217 16.8973 4.12374 16.4244 4.12374 15.8412C4.12374 15.2579 3.66217 14.7851 3.0928 14.7851C2.52343 14.7851 2.06187 14.3123 2.06187 13.729V3.16824C2.06187 2.58498 2.52343 2.11216 3.0928 2.11216H21.6496C22.219 2.11216 22.6806 2.58498 22.6806 3.16824V13.729C22.6806 14.3123 22.219 14.7851 21.6496 14.7851C21.0803 14.7851 20.6187 15.2579 20.6187 15.8412C20.6187 16.4244 21.0803 16.8973 21.6496 16.8973C23.3577 16.8973 24.7424 15.4788 24.7424 13.729ZM18.5569 19.0094C18.165 19.0122 17.8054 18.7871 17.6291 18.4286L16.8868 16.8973H7.85579L7.11352 18.4286C6.85028 18.9314 6.24475 19.1291 5.746 18.8751C5.24725 18.6211 5.03565 18.0072 5.26815 17.4887L6.01042 15.9574C6.3586 15.2396 7.07337 14.7855 7.85579 14.7851H16.8868C17.6692 14.7855 18.384 15.2396 18.7322 15.9574L19.4744 17.4887C19.6304 17.8146 19.6119 18.1998 19.4256 18.5086C19.2393 18.8174 18.9112 19.0065 18.5569 19.0094ZM10.51 12H9.04V6.72H7.24V5.48H12.3V6.72H10.51V12ZM16.2069 12H14.4369L12.4669 5.48H14.0269L14.8169 8.52C14.9049 8.84893 14.98 9.16713 15.0552 9.48554C15.1424 9.85441 15.2295 10.2236 15.3369 10.61H15.3769C15.4842 10.2236 15.5714 9.85442 15.6585 9.48555C15.7337 9.16714 15.8089 8.84893 15.8969 8.52L16.6669 5.48H18.1769L16.2069 12Z" fill="#0F1E36" fill-opacity="0.5" />
                    </svg>
                </div>
                <div className='border-r px-10 h-full items-center justify-center flex'>
                    <svg width="30" height="30" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M19.877 19.6033H3.47574C1.96604 19.6033 0.742188 18.3496 0.742188 16.803V7.46897C0.742188 5.92245 1.96604 4.66875 3.47574 4.66875H4.12268L11.1935 0.141723C11.6212 -0.131496 12.1842 0.00223234 12.4509 0.440413C12.7176 0.878594 12.5871 1.4553 12.1593 1.72852L5.08853 6.25554C4.79852 6.43966 4.46387 6.53668 4.12268 6.53556H3.47574C2.97251 6.53556 2.56455 6.95346 2.56455 7.46897V16.803C2.56455 17.3185 2.97251 17.7365 3.47574 17.7365H19.877C20.3803 17.7365 20.7882 17.3185 20.7882 16.803V7.46897C20.7882 6.95346 20.3803 6.53556 19.877 6.53556H9.85402C9.35079 6.53556 8.94284 6.11766 8.94284 5.60216C8.94284 5.08665 9.35079 4.66875 9.85402 4.66875H19.877C21.3867 4.66875 22.6106 5.92245 22.6106 7.46897V16.803C22.6106 17.5457 22.3226 18.258 21.81 18.7831C21.2973 19.3082 20.602 19.6033 19.877 19.6033ZM18.9661 12.136C18.9661 10.5895 17.7423 9.33578 16.2326 9.33578C14.7229 9.33578 13.499 10.5895 13.499 12.136C13.499 12.6515 13.907 13.0694 14.4102 13.0694C14.9134 13.0694 15.3214 12.6515 15.3214 12.136C15.3214 11.6205 15.7293 11.2026 16.2326 11.2026C16.7358 11.2026 17.1438 11.6205 17.1438 12.136C17.1438 12.6515 16.7358 13.0694 16.2326 13.0694C15.7293 13.0694 15.3214 13.4873 15.3214 14.0028C15.3214 14.5183 15.7293 14.9362 16.2326 14.9362C17.7423 14.9362 18.9661 13.6825 18.9661 12.136ZM10.7655 10.2692C10.7655 9.75369 10.3575 9.33578 9.85431 9.33578H5.29839C4.79516 9.33578 4.38721 9.75369 4.38721 10.2692C4.38721 10.7847 4.79516 11.2026 5.29839 11.2026H9.85431C10.3575 11.2026 10.7655 10.7847 10.7655 10.2692ZM10.7655 14.0028C10.7655 13.4873 10.3575 13.0694 9.85431 13.0694H5.29839C4.79516 13.0694 4.38721 13.4873 4.38721 14.0028C4.38721 14.5183 4.79516 14.9362 5.29839 14.9362H9.85431C10.3575 14.9362 10.7655 14.5183 10.7655 14.0028Z" fill="#0F1E36" fill-opacity="0.5" />
                    </svg>

                </div>
                <div className='border-r px-10 h-full items-center justify-center flex'>
                    <svg width="30" height="30" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clip-rule="evenodd" d="M9.64958 25.5846C8.83677 25.5846 8.03829 25.358 7.3344 24.9275C7.03299 24.7605 6.84228 24.4319 6.83767 24.0716C6.83307 23.7114 7.01531 23.3774 7.31235 23.2018C7.60939 23.0263 7.9734 23.0373 8.26047 23.2306C9.03369 23.6997 9.97247 23.7476 10.7846 23.3592C11.5968 22.9709 12.1838 22.1934 12.363 21.2689C12.5338 20.3329 13.3152 19.6625 14.2151 19.6799H16.8359L16.1969 16.9727C16.188 16.8945 16.188 16.8155 16.1969 16.7373V11.117C16.259 7.42983 13.618 4.31985 10.1497 3.99596C8.35631 3.86813 6.59334 4.53468 5.28179 5.83642C3.97024 7.13816 3.22785 8.95822 3.23191 10.862V16.7471C3.24083 16.8253 3.24083 16.9043 3.23191 16.9825L2.59292 19.6897H9.74219C10.2536 19.6897 10.6683 20.1288 10.6683 20.6705C10.6683 21.2123 10.2536 21.6514 9.74219 21.6514H2.59292C2.02368 21.6509 1.48626 21.3733 1.13553 20.8984C0.784798 20.4235 0.65972 19.8042 0.796337 19.2189L1.40754 16.6294V10.8718C1.4024 8.42489 2.35637 6.08551 4.04176 4.41198C5.72715 2.73845 7.99275 1.88092 10.2978 2.04405C14.7381 2.43519 18.1359 6.39818 18.0768 11.117V16.6098L18.688 19.1993C18.8247 19.7845 18.6996 20.4039 18.3488 20.8788C17.9981 21.3536 17.4607 21.6313 16.8915 21.6318H14.2707C13.8363 23.9601 11.8901 25.6249 9.64958 25.5846Z" fill="#0F1E36" fill-opacity="0.5" />
                        <ellipse cx="16.5" cy="4.58536" rx="3.5" ry="3.58536" fill="#F51E38" stroke="#F5F5F5" />
                    </svg>
                </div>

                <div className='flex px-10 items-center'>
                    <div className='h-12 w-12 rounded-full object-cover border'>

                    </div>
                    <div className='block ml-3'>
                        <h3 className='font-bold text-sm'>Clifford</h3>
                        <div className='flex items-center text-xs'>
                            <svg width="15" height="15" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clip-rule="evenodd" d="M8.75 7.68291H2.08333C1.85321 7.68291 1.66667 7.5005 1.66667 7.27548C1.66667 7.05047 1.85321 6.86805 2.08333 6.86805H8.75C8.98012 6.86805 9.16667 6.68564 9.16667 6.46062V2.72041L7.39583 3.8164C7.19313 4.0084 6.90481 4.08704 6.62974 4.02535C6.35466 3.96366 6.13021 3.77002 6.03333 3.51083L5 1.31885L3.95417 3.53527C3.84718 3.79047 3.61189 3.97268 3.33333 4.01604C3.06754 4.06467 2.79414 3.98416 2.6 3.8001L0.833333 2.72041V7.27548C0.833333 7.5005 0.646785 7.68291 0.416667 7.68291C0.186548 7.68291 9.16469e-09 7.5005 9.16469e-09 7.27548V2.72041C-4.49438e-05 2.42331 0.165285 2.14973 0.431461 2.00645C0.697636 1.86317 1.02247 1.8729 1.27917 2.03186L3.09167 3.15636C3.12592 3.17766 3.1568 3.20374 3.18333 3.23378L4.24583 0.984761C4.38223 0.696617 4.67737 0.512184 5.00208 0.512184C5.3268 0.512184 5.62194 0.696617 5.75833 0.984761L6.80417 3.20118C6.82917 3.17266 6.875 3.17673 6.90833 3.15636L8.72083 2.03593C8.97753 1.87698 9.30236 1.86724 9.56854 2.01052C9.83471 2.1538 10 2.42738 10 2.72449V6.46062C10 7.13567 9.44036 7.68291 8.75 7.68291Z" fill="#3E2AD1" />
                            </svg>
                            <span className='text-purple-800 pl-2'>Premium</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header