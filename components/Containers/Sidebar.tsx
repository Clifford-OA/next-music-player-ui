import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Sidebar = () => {
    return (
        <div className='w-72 h-screen pl-7 sticky top-0 py-4 border-r-2'>
            <div className=' h-14 top-0'>
                <Image alt='logo' className='object-cover' width={200} height={100} src={'/Mask Group.png'} />
            </div>
            <div className='mt-12 block text-gray-500 text-base'>
                <Link href={'/'} className='flex flex-row items-center mb-7 group hover:cursor-pointer'>
                    {/* icon */}
                    <svg className='fill-gray-500 group-hover:fill-[#3E2AD1]' width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.74483 15.0899C8.45698 15.0905 8.18088 14.9759 7.97803 14.7717L7.21124 14.0049C7.0048 13.8281 6.91488 13.5505 6.97845 13.2862C7.04201 13.022 7.24834 12.8157 7.51259 12.7521C7.77685 12.6885 8.05443 12.7784 8.23122 12.9849L8.74483 13.4985L8.99801 13.2453C9.05258 13.1904 9.08808 13.1194 9.09929 13.0428L9.52609 10.0624C9.57142 9.75246 9.71611 9.46561 9.93842 9.24496L11.7397 7.44372C12.965 6.22665 13.6527 4.57002 13.6494 2.84296V1.44681H12.2533C10.5262 1.44353 8.86957 2.13119 7.65251 3.35656L5.85127 5.1578C5.63061 5.38011 5.34376 5.5248 5.03384 5.57014L2.04624 5.99694C1.96962 6.00814 1.89862 6.04364 1.84369 6.09821L1.5905 6.3514L2.10411 6.865C2.31055 7.04179 2.40047 7.31938 2.3369 7.58363C2.27334 7.84789 2.06701 8.05421 1.80276 8.11778C1.5385 8.18134 1.26092 8.09142 1.08413 7.88498L0.317337 7.11819C-0.105779 6.69455 -0.105779 6.00825 0.317337 5.5846L0.830943 5.071C1.10685 4.79455 1.46454 4.61443 1.85092 4.55739L4.83852 4.13059L6.63976 2.32935C8.12941 0.832479 10.156 -0.00627152 12.2677 3.53116e-05H14.3728C14.7723 3.53116e-05 15.0962 0.323908 15.0962 0.723425V2.84296C15.1025 4.95474 14.2637 6.98129 12.7669 8.47093L10.9656 10.2722L10.5388 13.2598C10.4818 13.6462 10.3017 14.0038 10.0252 14.2797L9.51162 14.7934C9.30525 14.9896 9.02957 15.0963 8.74483 15.0899ZM5.1639 12.9849L6.18388 11.9649C6.42967 11.6779 6.41315 11.2501 6.14595 10.9829C5.87875 10.7157 5.45092 10.6991 5.1639 10.9449L4.14392 11.9649C3.93749 12.1417 3.84756 12.4193 3.91113 12.6835C3.9747 12.9478 4.18102 13.1541 4.44527 13.2177C4.70953 13.2812 4.98711 13.1913 5.1639 12.9849ZM2.09692 11.9649L4.14411 9.91771C4.3899 9.63069 4.37337 9.20286 4.10618 8.93566C3.83898 8.66846 3.41114 8.65193 3.12413 8.89773L1.07694 10.9449C0.870498 11.1217 0.780576 11.3993 0.844142 11.6635C0.907707 11.9278 1.11403 12.1341 1.37829 12.1977C1.64254 12.2613 1.92013 12.1713 2.09692 11.9649ZM11.3057 6.85054C12.1519 6.00325 12.1519 4.63065 11.3057 3.78337C11.1289 3.57693 10.8513 3.48701 10.5871 3.55057C10.3228 3.61414 10.1165 3.82046 10.0529 4.08472C9.98935 4.34897 10.0793 4.62656 10.2857 4.80335C10.4227 4.93917 10.4997 5.12407 10.4997 5.31695C10.4997 5.50984 10.4227 5.69473 10.2857 5.83056C10.0036 6.11103 9.54788 6.11103 9.26573 5.83056C9.12878 5.69473 9.05175 5.50984 9.05175 5.31695C9.05175 5.12407 9.12878 4.93917 9.26573 4.80335C9.51152 4.51633 9.49499 4.0885 9.22779 3.8213C8.9606 3.5541 8.53276 3.53758 8.24575 3.78337C7.66514 4.32438 7.42615 5.13916 7.62252 5.90807C7.81888 6.67699 8.4193 7.2774 9.18821 7.47377C9.95713 7.67014 10.7719 7.43114 11.3129 6.85054H11.3057Z" />
                    </svg>
                    <h1 className='pl-3 group-hover:text-purple-800'>Discover</h1>
                </Link>
                <Link href={'/'} className='flex flex-row items-center mb-7 group hover:cursor-pointer'>
                    {/* icon */}
                    <svg className='fill-[#0F1E36] group-hover:fill-[#3E2AD1]' width="20" height="20" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.54692 15C2.27085 14.9996 1.99591 14.9646 1.72848 14.8958C0.733813 14.5697 0.045024 13.6586 0 12.6095C0 10.6726 1.99722 10.1577 3.05386 10.1577C3.39118 10.1577 3.66463 10.4321 3.66463 10.7706C3.66463 11.1092 3.39118 11.3836 3.05386 11.3836C2.98057 11.3836 1.22154 11.3836 1.22154 12.6095C1.27442 13.0911 1.58291 13.5062 2.02776 13.6944C2.69198 13.8605 3.39535 13.7039 3.92726 13.2715C4.53311 12.7966 4.88872 12.0693 4.89228 11.2978V2.48351C4.8989 1.69027 5.25159 0.939788 5.8573 0.430114C6.29409 0.0623671 6.87657 -0.0803736 7.43309 0.043954C9.00278 0.405596 11 2.6061 11 4.56142C10.9378 5.57678 10.3455 6.48354 9.44253 6.9458C9.14063 7.09814 8.77284 6.97602 8.62104 6.67304C8.46925 6.37006 8.59094 6.00095 8.89284 5.84862C9.38366 5.59176 9.71547 5.1072 9.77846 4.55529C9.77846 3.15162 8.14159 1.49052 7.15825 1.23308C6.96594 1.19249 6.76591 1.24723 6.62077 1.38019C6.30572 1.65562 6.12155 2.052 6.11383 2.47125V11.2855C6.11047 12.4339 5.584 13.5177 4.68462 14.2277C4.07911 14.7195 3.32584 14.9916 2.54692 15Z" />
                    </svg>
                    <h1 className='pl-3 group-hover:text-purple-800'>Songs</h1>
                </Link>
                <Link href={'/'} className='flex flex-row items-center mb-7 group hover:cursor-pointer'>
                    {/* icon */}
                    <svg className='fill-[#0F1E36] group-hover:fill-[#3E2AD1]' width="20" height="20" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.2871 15.9866H6.01414C5.64426 15.9866 5.34441 15.6868 5.34441 15.3169C5.34441 14.947 5.64426 14.6471 6.01414 14.6471H10.2871C10.5175 14.6472 10.7053 14.4623 10.709 14.2319V6.52323C10.7088 6.41303 10.6656 6.30726 10.5884 6.22855L8.50556 4.14567C8.42725 4.06793 8.32122 4.02455 8.21088 4.02512H4.43357C4.20316 4.02877 4.0183 4.21661 4.01833 4.44705V15.3303C4.01833 15.7001 3.71848 16 3.34859 16C2.97871 16 2.67886 15.7001 2.67886 15.3303V4.44705C2.68255 3.47687 3.47008 2.69233 4.44026 2.69234H8.21758C8.68507 2.69075 9.13371 2.87648 9.46328 3.20804L11.5462 5.29092C11.8758 5.62175 12.0612 6.06958 12.0619 6.53663V14.2453C12.0508 15.2155 11.2573 15.994 10.2871 15.9866ZM1.33278 12.6379V1.75471C1.33643 1.5243 1.52427 1.33944 1.75471 1.33947H6.20176C6.57164 1.33947 6.87149 1.03962 6.87149 0.669736C6.87149 0.299851 6.57164 0 6.20176 0H1.75471C0.784528 0.00368893 -7.01315e-06 0.791218 0 1.76141V12.6446C0 13.0145 0.299851 13.3144 0.669736 13.3144C1.03962 13.3144 1.33947 13.0145 1.33947 12.6446L1.33278 12.6379Z" />
                    </svg>

                    <h1 className='pl-3 group-hover:text-purple-800'>Albums</h1>
                </Link >
                <Link href={'/'} className='flex flex-row items-center mb-7 group hover:cursor-pointer'>
                    {/* icon */}
                    <svg className='fill-[#0F1E36] group-hover:fill-[#3E2AD1]' width="20" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 16H3.33333C2.96514 16 2.66667 15.7015 2.66667 15.3333C2.66667 14.9652 2.96514 14.6667 3.33333 14.6667H10C10.3682 14.6667 10.6667 14.3682 10.6667 14V11.2333C10.6331 10.8593 10.4088 10.529 10.0733 10.36C7.46025 9.30497 4.53975 9.30497 1.92667 10.36C1.59125 10.529 1.36689 10.8593 1.33333 11.2333V15.3333C1.33333 15.7015 1.03486 16 0.666667 16C0.298477 16 0 15.7015 0 15.3333V11.2333C0.0294815 10.3131 0.58421 9.4914 1.42667 9.12C4.36032 7.93454 7.63968 7.93454 10.5733 9.12C11.4158 9.4914 11.9705 10.3131 12 11.2333V14C12 15.1046 11.1046 16 10 16ZM9.33334 3.33333C9.33334 1.49238 7.84095 0 6 0C4.15905 0 2.66667 1.49238 2.66667 3.33333C2.66667 5.17428 4.15905 6.66667 6 6.66667C7.84095 6.66667 9.33334 5.17428 9.33334 3.33333ZM8 3.33333C8 4.4379 7.10457 5.33334 6 5.33334C4.89543 5.33334 4 4.4379 4 3.33333C4 2.22876 4.89543 1.33333 6 1.33333C7.10457 1.33333 8 2.22876 8 3.33333Z" />
                    </svg>
                    <h1 className='pl-3 group-hover:text-purple-800'>Artists</h1>
                </Link>
                <Link href={'/'} className='flex flex-row items-center mb-7 group hover:cursor-pointer'>
                    {/* icon */}
                    <svg className='fill-[#0F1E36] group-hover:fill-[#3E2AD1]' width="20" height="20" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1.36112 12.073C1.2419 12.0738 1.12456 12.0433 1.02084 11.9845C0.386636 11.6184 -0.00289117 10.9406 1.61616e-05 10.2083V2.04166C-0.000451798 1.31178 0.388748 0.637167 1.02084 0.272227C1.23181 0.138118 1.49931 0.130462 1.7176 0.252288C1.93589 0.374113 2.06982 0.605807 2.06643 0.855766C2.06305 1.10572 1.9229 1.33371 1.7014 1.44958C1.48999 1.57163 1.36015 1.79756 1.36112 2.04166V10.2083C1.36015 10.4524 1.48999 10.6783 1.7014 10.8004C1.97104 10.9532 2.10339 11.2688 2.02333 11.5683C1.94328 11.8677 1.67104 12.0752 1.36112 12.073ZM15.3129 11.9777C15.945 11.6128 16.3342 10.9382 16.3337 10.2083V2.04165C16.3332 1.3156 15.9471 0.644469 15.3197 0.279024C15.1087 0.144915 14.8412 0.13726 14.6229 0.259085C14.4047 0.380911 14.2707 0.612604 14.2741 0.862563C14.2775 1.11252 14.4176 1.34051 14.6392 1.45638C14.8485 1.57721 14.978 1.79998 14.9794 2.04165V10.2083C14.9804 10.4524 14.8506 10.6783 14.6392 10.8004C14.4176 10.9162 14.2775 11.1442 14.2741 11.3942C14.2707 11.6441 14.4047 11.8758 14.6229 11.9977C14.8412 12.1195 15.1087 12.1118 15.3197 11.9777H15.3129ZM4.08289 10.8888C3.70703 10.8888 3.40233 11.1935 3.40233 11.5694C3.40233 11.9452 3.70703 12.2499 4.08289 12.2499C4.45874 12.2499 4.76344 11.9452 4.76344 11.5694C4.76344 11.1935 4.45874 10.8888 4.08289 10.8888ZM6.80571 10.8888C6.42985 10.8888 6.12516 11.1935 6.12516 11.5694C6.12516 11.9452 6.42985 12.2499 6.80571 12.2499C7.18157 12.2499 7.48626 11.9452 7.48626 11.5694C7.48626 11.1935 7.18157 10.8888 6.80571 10.8888ZM9.52766 10.8888C9.1518 10.8888 8.84711 11.1935 8.84711 11.5694C8.84711 11.9452 9.1518 12.2499 9.52766 12.2499C9.90352 12.2499 10.2082 11.9452 10.2082 11.5694C10.2082 11.1935 9.90352 10.8888 9.52766 10.8888ZM12.2501 10.8888C11.8742 10.8888 11.5695 11.1935 11.5695 11.5694C11.5695 11.9452 11.8742 12.2499 12.2501 12.2499C12.6259 12.2499 12.9306 11.9452 12.9306 11.5694C12.9306 11.1935 12.6259 10.8888 12.2501 10.8888ZM4.08289 0C3.70703 0 3.40233 0.304693 3.40233 0.680552C3.40233 1.05641 3.70703 1.3611 4.08289 1.3611C4.45874 1.3611 4.76344 1.05641 4.76344 0.680552C4.76344 0.304693 4.45874 0 4.08289 0ZM6.80571 0C6.42985 0 6.12516 0.304693 6.12516 0.680552C6.12516 1.05641 6.42985 1.3611 6.80571 1.3611C7.18157 1.3611 7.48626 1.05641 7.48626 0.680552C7.48626 0.304693 7.18157 0 6.80571 0ZM9.52766 0C9.1518 0 8.84711 0.304693 8.84711 0.680552C8.84711 1.05641 9.1518 1.3611 9.52766 1.3611C9.90352 1.3611 10.2082 1.05641 10.2082 0.680552C10.2082 0.304693 9.90352 0 9.52766 0ZM12.2501 0C11.8742 0 11.5695 0.304693 11.5695 0.680552C11.5695 1.05641 11.8742 1.3611 12.2501 1.3611C12.6259 1.3611 12.9306 1.05641 12.9306 0.680552C12.9306 0.304693 12.6259 0 12.2501 0ZM7.48612 8.84717V4.76386L9.58222 6.39718L9.1875 6.62857C8.96599 6.74444 8.82584 6.97243 8.82246 7.22239C8.81908 7.47234 8.953 7.70404 9.17129 7.82586C9.38958 7.94769 9.65708 7.94003 9.86805 7.80593L11.1339 7.06412C11.3282 6.95008 11.4534 6.74727 11.4684 6.52248C11.4834 6.29768 11.3862 6.08004 11.2087 5.94121L7.2207 2.83109C7.0155 2.66893 6.73553 2.63871 6.50045 2.75335C6.26538 2.86799 6.11679 3.10719 6.11821 3.36873V8.81314C6.11821 9.189 6.4229 9.49369 6.79876 9.49369C7.17462 9.49369 7.47931 9.189 7.47931 8.81314L7.48612 8.84717Z" />
                    </svg>

                    <h1 className='pl-3 group-hover:text-purple-800'>Youtube</h1>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar