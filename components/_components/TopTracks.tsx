import React from 'react'

const TopTracks = () => {
    return (
        <div className='block p-5 flex-1'>
            <h1 className='text-base font-bold'>Top Tracks</h1>
            <table className='w-full text-sm mt-3'>
                <thead>
                    <tr className='font-bold'>
                        <th className='text-left p-2'>#</th>
                        <th className='text-left p-2'></th>
                        <th className='text-left p-2'>Song</th>
                        <th className='text-left p-2'>Artist</th>
                        <th className='text-left p-2'>Daily Plays</th>
                        <th className='text-left p-2'>Time</th>
                        <th className='text-left p-2'>Option</th>
                    </tr>
                </thead>
                <tbody>
                    <tr >
                        <td className='text-left px-2 py-3'>1</td>
                        <td className='text-left px-2 py-3'>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.0969 12.9938H7.36905C6.87359 12.9933 6.39859 12.7973 6.04847 12.4488L5.17017 11.5755C4.9924 11.4241 4.91497 11.1865 4.96971 10.9602C5.02445 10.734 5.20211 10.5573 5.42966 10.5029C5.65721 10.4485 5.89624 10.5255 6.04847 10.7022L6.92678 11.5755C7.04433 11.6914 7.20347 11.7561 7.36905 11.7551H12.0969C12.392 11.7629 12.6521 11.5638 12.7199 11.2782L13.7601 6.94282C13.8047 6.75571 13.7593 6.55864 13.6373 6.40945C13.5153 6.26025 13.3305 6.17586 13.1372 6.18103H8.48406C8.05295 6.1808 7.6526 5.95898 7.4256 5.59458C7.19859 5.23018 7.1772 4.77499 7.36905 4.39113L8.44668 2.2544C8.55588 2.03745 8.5454 1.77996 8.41893 1.57249C8.29247 1.36502 8.06773 1.23664 7.82377 1.23249L5.13279 5.24582C4.62307 6.00495 4.30863 6.87691 4.21711 7.78512L3.86205 11.3278C3.76573 12.2807 2.95661 13.0048 1.99332 13H1.86874C0.836661 13 0 12.1681 0 11.142V6.18722C0 5.16106 0.836661 4.3292 1.86874 4.3292C2.21276 4.3292 2.49165 4.60649 2.49165 4.94854C2.49165 5.29059 2.21276 5.56788 1.86874 5.56788C1.52471 5.56788 1.24582 5.84517 1.24582 6.18722V11.142C1.24582 11.484 1.52471 11.7613 1.86874 11.7613H1.98709C2.30819 11.7629 2.57789 11.5215 2.61 11.2039L2.96506 7.66125C3.07801 6.55424 3.46074 5.49131 4.08007 4.56455L6.77105 0.551216C7.00169 0.207505 7.38952 0.000766915 7.80508 1.90148e-06C8.48417 -0.000940396 9.11515 0.348397 9.47198 0.922866C9.8288 1.49734 9.86041 2.21471 9.55547 2.818L8.47783 4.95473H13.131C13.7022 4.95465 14.2422 5.21437 14.5967 5.65978C14.9512 6.10518 15.0813 6.68734 14.9499 7.2401L13.9096 11.5755C13.7059 12.4069 12.9576 12.9924 12.0969 12.9938Z" fill="#0F1E36" />
                            </svg>
                        </td>
                        <td className='text-left px-2 py-3'>Kamelia</td>
                        <td className='text-left px-2 py-3'>Claydee feat</td>
                        <td className='text-left px-2 py-3'>36,000</td>
                        <td className='text-left px-2 py-3'>4:21</td>
                        <td className='text-left px-2 py-3'>
                            <div className='flex items-center  justify-between'>
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.125 12.5H11.875C11.5298 12.5 11.25 12.2202 11.25 11.875C11.25 11.5298 11.5298 11.25 11.875 11.25H13.125C13.4702 11.25 13.75 10.9702 13.75 10.625V4.375C13.75 4.02982 13.4702 3.75 13.125 3.75H3.125C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H13.125C14.1605 2.5 15 3.33947 15 4.375V10.625C15 11.6605 14.1605 12.5 13.125 12.5ZM4.375 11.875C4.375 11.5298 4.09518 11.25 3.75 11.25H1.875C1.52982 11.25 1.25 10.9702 1.25 10.625V1.875C1.25 1.52982 1.52982 1.25 1.875 1.25H5.73125C5.89738 1.24904 6.05705 1.31426 6.175 1.43125L6.43125 1.6875C6.67922 1.89986 7.04887 1.88558 7.27973 1.65473C7.51058 1.42387 7.52486 1.05423 7.3125 0.80625L7.05625 0.55C6.70496 0.198269 6.22836 0.00043763 5.73125 0H1.875C0.839466 0 0 0.839466 0 1.875V10.625C0 11.6605 0.839466 12.5 1.875 12.5H3.75C4.09518 12.5 4.375 12.2202 4.375 11.875ZM7.94361 12.3188L10.4436 9.81875C10.656 9.57078 10.6417 9.20113 10.4108 8.97027C10.18 8.73942 9.81034 8.72514 9.56236 8.9375L8.13111 10.3687V5.625C8.13111 5.27982 7.85129 5 7.50611 5C7.16094 5 6.88111 5.27982 6.88111 5.625V11.875C6.87964 12.1289 7.03193 12.3585 7.26644 12.4559C7.50095 12.5532 7.77106 12.499 7.94986 12.3188H7.94361ZM6.06881 10.4438C6.31114 10.2 6.31114 9.80628 6.06881 9.56251L5.44381 8.93751C5.29107 8.75915 5.05124 8.68146 4.82292 8.73638C4.59461 8.7913 4.41635 8.96956 4.36143 9.19787C4.30651 9.42619 4.3842 9.66602 4.56256 9.81876L5.18756 10.4438C5.43133 10.6861 5.82504 10.6861 6.06881 10.4438Z" fill="#0F1E36" />
                                </svg>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.2471 12C11.4664 11.9991 10.7803 11.4096 10.5644 10.5541L4.06702 8.46197C3.34821 9.36392 2.18445 9.59494 1.24065 9.02302C0.296857 8.4511 -0.186485 7.22197 0.0667887 6.03791C0.320062 4.85385 1.24541 4.01657 2.31414 4.00444C2.91427 4.00359 3.49169 4.26602 3.92679 4.73737L7.89414 1.62576C8.05141 0.681892 8.77529 -0.000873401 9.6178 8.38595e-07C10.5859 8.38595e-07 11.3707 0.894934 11.3707 1.99889C11.3707 3.10285 10.5859 3.99778 9.6178 3.99778C9.29511 3.99778 9.03351 3.69947 9.03351 3.33148C9.03351 2.9635 9.29511 2.66519 9.6178 2.66519C9.92734 2.66063 10.18 2.38157 10.194 2.02891C10.2079 1.67626 9.9782 1.37243 9.67027 1.33617C9.36235 1.29992 9.08307 1.54382 9.03351 1.89228C8.97956 2.23432 8.80405 2.53573 8.54855 2.72515L4.13129 6.18323C3.99178 6.29207 3.81778 6.32668 3.6542 6.27813C3.49062 6.22957 3.3535 6.10262 3.27822 5.93004C2.99715 5.43371 2.46304 5.20769 1.96608 5.37477C1.46911 5.54186 1.12796 6.06214 1.12796 6.65297C1.12796 7.2438 1.46911 7.76409 1.96608 7.93117C2.46304 8.09825 2.99715 7.87223 3.27822 7.3759C3.40761 7.10118 3.68678 6.96553 3.95016 7.04942L10.8507 9.24153C11.2479 9.36919 11.5566 9.72629 11.6628 10.181C11.7466 10.5074 12.0325 10.7095 12.3261 10.6499C12.6197 10.5902 12.8268 10.2879 12.8066 9.9486C12.7863 9.60928 12.5451 9.34184 12.2471 9.32815C11.9244 9.32815 11.6628 9.02984 11.6628 8.66185C11.6628 8.29387 11.9244 7.99556 12.2471 7.99556C13.2152 7.99556 14 8.89049 14 9.99445C14 11.0984 13.2152 11.9933 12.2471 11.9933V12Z" fill="#0F1E36" />
                                </svg>
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2C5.55228 2 6 1.55228 6 1C6 0.447715 5.55228 0 5 0Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44772 0 8 0.447715 8 1C8 1.55228 8.44772 2 9 2C9.55228 2 10 1.55228 10 1C10 0.447715 9.55228 0 9 0Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr className='drop-shadow-lg bg-white cursor-pointer rounded-md'>
                        <td className='text-left py-3 px-2'>2</td>
                        <td className='text-left py-3 px-2'>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.0969 12.9938H7.36905C6.87359 12.9933 6.39859 12.7973 6.04847 12.4488L5.17017 11.5755C4.9924 11.4241 4.91497 11.1865 4.96971 10.9602C5.02445 10.734 5.20211 10.5573 5.42966 10.5029C5.65721 10.4485 5.89624 10.5255 6.04847 10.7022L6.92678 11.5755C7.04433 11.6914 7.20347 11.7561 7.36905 11.7551H12.0969C12.392 11.7629 12.6521 11.5638 12.7199 11.2782L13.7601 6.94282C13.8047 6.75571 13.7593 6.55864 13.6373 6.40945C13.5153 6.26025 13.3305 6.17586 13.1372 6.18103H8.48406C8.05295 6.1808 7.6526 5.95898 7.4256 5.59458C7.19859 5.23018 7.1772 4.77499 7.36905 4.39113L8.44668 2.2544C8.55588 2.03745 8.5454 1.77996 8.41893 1.57249C8.29247 1.36502 8.06773 1.23664 7.82377 1.23249L5.13279 5.24582C4.62307 6.00495 4.30863 6.87691 4.21711 7.78512L3.86205 11.3278C3.76573 12.2807 2.95661 13.0048 1.99332 13H1.86874C0.836661 13 0 12.1681 0 11.142V6.18722C0 5.16106 0.836661 4.3292 1.86874 4.3292C2.21276 4.3292 2.49165 4.60649 2.49165 4.94854C2.49165 5.29059 2.21276 5.56788 1.86874 5.56788C1.52471 5.56788 1.24582 5.84517 1.24582 6.18722V11.142C1.24582 11.484 1.52471 11.7613 1.86874 11.7613H1.98709C2.30819 11.7629 2.57789 11.5215 2.61 11.2039L2.96506 7.66125C3.07801 6.55424 3.46074 5.49131 4.08007 4.56455L6.77105 0.551216C7.00169 0.207505 7.38952 0.000766915 7.80508 1.90148e-06C8.48417 -0.000940396 9.11515 0.348397 9.47198 0.922866C9.8288 1.49734 9.86041 2.21471 9.55547 2.818L8.47783 4.95473H13.131C13.7022 4.95465 14.2422 5.21437 14.5967 5.65978C14.9512 6.10518 15.0813 6.68734 14.9499 7.2401L13.9096 11.5755C13.7059 12.4069 12.9576 12.9924 12.0969 12.9938Z" fill="#0F1E36" />
                            </svg>
                        </td>
                        <td className='text-left py-3 px-2'>Kamelia</td>
                        <td className='text-left py-3 px-2'>Claydee feat</td>
                        <td className='text-left py-3 px-2'>36,000</td>
                        <td className='text-left py-3 px-2'>4:21</td>
                        <td className='text-left py-3 px-2'>
                            <div className='flex items-center  justify-between'>
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.125 12.5H11.875C11.5298 12.5 11.25 12.2202 11.25 11.875C11.25 11.5298 11.5298 11.25 11.875 11.25H13.125C13.4702 11.25 13.75 10.9702 13.75 10.625V4.375C13.75 4.02982 13.4702 3.75 13.125 3.75H3.125C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H13.125C14.1605 2.5 15 3.33947 15 4.375V10.625C15 11.6605 14.1605 12.5 13.125 12.5ZM4.375 11.875C4.375 11.5298 4.09518 11.25 3.75 11.25H1.875C1.52982 11.25 1.25 10.9702 1.25 10.625V1.875C1.25 1.52982 1.52982 1.25 1.875 1.25H5.73125C5.89738 1.24904 6.05705 1.31426 6.175 1.43125L6.43125 1.6875C6.67922 1.89986 7.04887 1.88558 7.27973 1.65473C7.51058 1.42387 7.52486 1.05423 7.3125 0.80625L7.05625 0.55C6.70496 0.198269 6.22836 0.00043763 5.73125 0H1.875C0.839466 0 0 0.839466 0 1.875V10.625C0 11.6605 0.839466 12.5 1.875 12.5H3.75C4.09518 12.5 4.375 12.2202 4.375 11.875ZM7.94361 12.3188L10.4436 9.81875C10.656 9.57078 10.6417 9.20113 10.4108 8.97027C10.18 8.73942 9.81034 8.72514 9.56236 8.9375L8.13111 10.3687V5.625C8.13111 5.27982 7.85129 5 7.50611 5C7.16094 5 6.88111 5.27982 6.88111 5.625V11.875C6.87964 12.1289 7.03193 12.3585 7.26644 12.4559C7.50095 12.5532 7.77106 12.499 7.94986 12.3188H7.94361ZM6.06881 10.4438C6.31114 10.2 6.31114 9.80628 6.06881 9.56251L5.44381 8.93751C5.29107 8.75915 5.05124 8.68146 4.82292 8.73638C4.59461 8.7913 4.41635 8.96956 4.36143 9.19787C4.30651 9.42619 4.3842 9.66602 4.56256 9.81876L5.18756 10.4438C5.43133 10.6861 5.82504 10.6861 6.06881 10.4438Z" fill="#0F1E36" />
                                </svg>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.2471 12C11.4664 11.9991 10.7803 11.4096 10.5644 10.5541L4.06702 8.46197C3.34821 9.36392 2.18445 9.59494 1.24065 9.02302C0.296857 8.4511 -0.186485 7.22197 0.0667887 6.03791C0.320062 4.85385 1.24541 4.01657 2.31414 4.00444C2.91427 4.00359 3.49169 4.26602 3.92679 4.73737L7.89414 1.62576C8.05141 0.681892 8.77529 -0.000873401 9.6178 8.38595e-07C10.5859 8.38595e-07 11.3707 0.894934 11.3707 1.99889C11.3707 3.10285 10.5859 3.99778 9.6178 3.99778C9.29511 3.99778 9.03351 3.69947 9.03351 3.33148C9.03351 2.9635 9.29511 2.66519 9.6178 2.66519C9.92734 2.66063 10.18 2.38157 10.194 2.02891C10.2079 1.67626 9.9782 1.37243 9.67027 1.33617C9.36235 1.29992 9.08307 1.54382 9.03351 1.89228C8.97956 2.23432 8.80405 2.53573 8.54855 2.72515L4.13129 6.18323C3.99178 6.29207 3.81778 6.32668 3.6542 6.27813C3.49062 6.22957 3.3535 6.10262 3.27822 5.93004C2.99715 5.43371 2.46304 5.20769 1.96608 5.37477C1.46911 5.54186 1.12796 6.06214 1.12796 6.65297C1.12796 7.2438 1.46911 7.76409 1.96608 7.93117C2.46304 8.09825 2.99715 7.87223 3.27822 7.3759C3.40761 7.10118 3.68678 6.96553 3.95016 7.04942L10.8507 9.24153C11.2479 9.36919 11.5566 9.72629 11.6628 10.181C11.7466 10.5074 12.0325 10.7095 12.3261 10.6499C12.6197 10.5902 12.8268 10.2879 12.8066 9.9486C12.7863 9.60928 12.5451 9.34184 12.2471 9.32815C11.9244 9.32815 11.6628 9.02984 11.6628 8.66185C11.6628 8.29387 11.9244 7.99556 12.2471 7.99556C13.2152 7.99556 14 8.89049 14 9.99445C14 11.0984 13.2152 11.9933 12.2471 11.9933V12Z" fill="#0F1E36" />
                                </svg>
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2C5.55228 2 6 1.55228 6 1C6 0.447715 5.55228 0 5 0Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44772 0 8 0.447715 8 1C8 1.55228 8.44772 2 9 2C9.55228 2 10 1.55228 10 1C10 0.447715 9.55228 0 9 0Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='text-left py-3 px-2'>3</td>
                        <td className='text-left py-3 px-2'>
                            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.0969 12.9938H7.36905C6.87359 12.9933 6.39859 12.7973 6.04847 12.4488L5.17017 11.5755C4.9924 11.4241 4.91497 11.1865 4.96971 10.9602C5.02445 10.734 5.20211 10.5573 5.42966 10.5029C5.65721 10.4485 5.89624 10.5255 6.04847 10.7022L6.92678 11.5755C7.04433 11.6914 7.20347 11.7561 7.36905 11.7551H12.0969C12.392 11.7629 12.6521 11.5638 12.7199 11.2782L13.7601 6.94282C13.8047 6.75571 13.7593 6.55864 13.6373 6.40945C13.5153 6.26025 13.3305 6.17586 13.1372 6.18103H8.48406C8.05295 6.1808 7.6526 5.95898 7.4256 5.59458C7.19859 5.23018 7.1772 4.77499 7.36905 4.39113L8.44668 2.2544C8.55588 2.03745 8.5454 1.77996 8.41893 1.57249C8.29247 1.36502 8.06773 1.23664 7.82377 1.23249L5.13279 5.24582C4.62307 6.00495 4.30863 6.87691 4.21711 7.78512L3.86205 11.3278C3.76573 12.2807 2.95661 13.0048 1.99332 13H1.86874C0.836661 13 0 12.1681 0 11.142V6.18722C0 5.16106 0.836661 4.3292 1.86874 4.3292C2.21276 4.3292 2.49165 4.60649 2.49165 4.94854C2.49165 5.29059 2.21276 5.56788 1.86874 5.56788C1.52471 5.56788 1.24582 5.84517 1.24582 6.18722V11.142C1.24582 11.484 1.52471 11.7613 1.86874 11.7613H1.98709C2.30819 11.7629 2.57789 11.5215 2.61 11.2039L2.96506 7.66125C3.07801 6.55424 3.46074 5.49131 4.08007 4.56455L6.77105 0.551216C7.00169 0.207505 7.38952 0.000766915 7.80508 1.90148e-06C8.48417 -0.000940396 9.11515 0.348397 9.47198 0.922866C9.8288 1.49734 9.86041 2.21471 9.55547 2.818L8.47783 4.95473H13.131C13.7022 4.95465 14.2422 5.21437 14.5967 5.65978C14.9512 6.10518 15.0813 6.68734 14.9499 7.2401L13.9096 11.5755C13.7059 12.4069 12.9576 12.9924 12.0969 12.9938Z" fill="#0F1E36" />
                            </svg>
                        </td>
                        <td className='text-left py-3 px-2'>Kamelia</td>
                        <td className='text-left py-3 px-2'>Claydee feat</td>
                        <td className='text-left py-3 px-2'>36,000</td>
                        <td className='text-left py-3 px-2'>4:21</td>
                        <td className='text-left py-3 px-2'>
                            <div className='flex items-center  justify-between'>
                                <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M13.125 12.5H11.875C11.5298 12.5 11.25 12.2202 11.25 11.875C11.25 11.5298 11.5298 11.25 11.875 11.25H13.125C13.4702 11.25 13.75 10.9702 13.75 10.625V4.375C13.75 4.02982 13.4702 3.75 13.125 3.75H3.125C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H13.125C14.1605 2.5 15 3.33947 15 4.375V10.625C15 11.6605 14.1605 12.5 13.125 12.5ZM4.375 11.875C4.375 11.5298 4.09518 11.25 3.75 11.25H1.875C1.52982 11.25 1.25 10.9702 1.25 10.625V1.875C1.25 1.52982 1.52982 1.25 1.875 1.25H5.73125C5.89738 1.24904 6.05705 1.31426 6.175 1.43125L6.43125 1.6875C6.67922 1.89986 7.04887 1.88558 7.27973 1.65473C7.51058 1.42387 7.52486 1.05423 7.3125 0.80625L7.05625 0.55C6.70496 0.198269 6.22836 0.00043763 5.73125 0H1.875C0.839466 0 0 0.839466 0 1.875V10.625C0 11.6605 0.839466 12.5 1.875 12.5H3.75C4.09518 12.5 4.375 12.2202 4.375 11.875ZM7.94361 12.3188L10.4436 9.81875C10.656 9.57078 10.6417 9.20113 10.4108 8.97027C10.18 8.73942 9.81034 8.72514 9.56236 8.9375L8.13111 10.3687V5.625C8.13111 5.27982 7.85129 5 7.50611 5C7.16094 5 6.88111 5.27982 6.88111 5.625V11.875C6.87964 12.1289 7.03193 12.3585 7.26644 12.4559C7.50095 12.5532 7.77106 12.499 7.94986 12.3188H7.94361ZM6.06881 10.4438C6.31114 10.2 6.31114 9.80628 6.06881 9.56251L5.44381 8.93751C5.29107 8.75915 5.05124 8.68146 4.82292 8.73638C4.59461 8.7913 4.41635 8.96956 4.36143 9.19787C4.30651 9.42619 4.3842 9.66602 4.56256 9.81876L5.18756 10.4438C5.43133 10.6861 5.82504 10.6861 6.06881 10.4438Z" fill="#0F1E36" />
                                </svg>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12.2471 12C11.4664 11.9991 10.7803 11.4096 10.5644 10.5541L4.06702 8.46197C3.34821 9.36392 2.18445 9.59494 1.24065 9.02302C0.296857 8.4511 -0.186485 7.22197 0.0667887 6.03791C0.320062 4.85385 1.24541 4.01657 2.31414 4.00444C2.91427 4.00359 3.49169 4.26602 3.92679 4.73737L7.89414 1.62576C8.05141 0.681892 8.77529 -0.000873401 9.6178 8.38595e-07C10.5859 8.38595e-07 11.3707 0.894934 11.3707 1.99889C11.3707 3.10285 10.5859 3.99778 9.6178 3.99778C9.29511 3.99778 9.03351 3.69947 9.03351 3.33148C9.03351 2.9635 9.29511 2.66519 9.6178 2.66519C9.92734 2.66063 10.18 2.38157 10.194 2.02891C10.2079 1.67626 9.9782 1.37243 9.67027 1.33617C9.36235 1.29992 9.08307 1.54382 9.03351 1.89228C8.97956 2.23432 8.80405 2.53573 8.54855 2.72515L4.13129 6.18323C3.99178 6.29207 3.81778 6.32668 3.6542 6.27813C3.49062 6.22957 3.3535 6.10262 3.27822 5.93004C2.99715 5.43371 2.46304 5.20769 1.96608 5.37477C1.46911 5.54186 1.12796 6.06214 1.12796 6.65297C1.12796 7.2438 1.46911 7.76409 1.96608 7.93117C2.46304 8.09825 2.99715 7.87223 3.27822 7.3759C3.40761 7.10118 3.68678 6.96553 3.95016 7.04942L10.8507 9.24153C11.2479 9.36919 11.5566 9.72629 11.6628 10.181C11.7466 10.5074 12.0325 10.7095 12.3261 10.6499C12.6197 10.5902 12.8268 10.2879 12.8066 9.9486C12.7863 9.60928 12.5451 9.34184 12.2471 9.32815C11.9244 9.32815 11.6628 9.02984 11.6628 8.66185C11.6628 8.29387 11.9244 7.99556 12.2471 7.99556C13.2152 7.99556 14 8.89049 14 9.99445C14 11.0984 13.2152 11.9933 12.2471 11.9933V12Z" fill="#0F1E36" />
                                </svg>
                                <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2C5.55228 2 6 1.55228 6 1C6 0.447715 5.55228 0 5 0Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0C8.44772 0 8 0.447715 8 1C8 1.55228 8.44772 2 9 2C9.55228 2 10 1.55228 10 1C10 0.447715 9.55228 0 9 0Z" fill="black" />
                                    </g>
                                </svg>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default TopTracks