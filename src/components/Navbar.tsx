import {BaseContainer} from "@/components/BaseContainer";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/server";
import {ArrowRight} from "lucide-react";

export const Navbar = () => {
    return (
        <div className="sticky inset-x-0 top-0 z-30 w-full h-14 border-gray-200 bg-white/75">
            <BaseContainer>
                <div className="flex items-center h-14 justify-between border-b border-zinc-200">
                    <Link href={'/'} className="flex z-40 font-semibold">Quill</Link>

                    {/* mobile navigation */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <>
                            <Link href={'/pricing'} className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}>
                                Pricing
                            </Link>
                            <LoginLink className={buttonVariants({
                                variant: 'ghost',
                                size: 'sm'
                            })}>Sign in</LoginLink>
                            <RegisterLink className={buttonVariants({
                                size: 'sm'
                            })}>Get started <ArrowRight className='h-5 w-5'/></RegisterLink>
                        </>
                    </div>
                </div>
            </BaseContainer>
        </div>
    );
};