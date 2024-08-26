import React from 'react';
import {Container} from "@/components/shared/container";
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { Button, CartDrawer } from '@/components/ui';
import Image from "next/image"

interface Props {
    className?: string;
}
export const Header: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <Container>
                <div className='flex items-center gap-4'>
                    <Image src="/assets/logo.png" alt="Logo" width={35} height={35} />
                    <div className='flex flex-col'>
                        <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                        <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className='gap-1'>
                        <User size={16}/>
                        Войти</Button>

                    <CartDrawer>
                        <Button className="group relative">
                            <b>520 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                                <b>3</b>
                            </div>
                            <ArrowRight
                              className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </CartDrawer>
                </div>
            </Container>
        </div>
    );
};
