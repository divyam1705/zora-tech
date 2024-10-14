import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import React from 'react';
import { IconType } from 'react-icons/lib';

interface BulletCardProps {
    heading: string;
    description: string;
    Icon: IconType;
}

const BulletCard: React.FC<BulletCardProps> = ({ heading, description, Icon }) => {
    return (
        <Card className="cursor-pointer w-64 h-72 shadow-xl transform transition-transform hover:-translate-y-2">
            <CardHeader className=''>
                <Icon size={20} className='section-text' />
                <h3 className="section-text text-xl font-semibold">{heading}</h3>
            </CardHeader>
            <CardContent className=''>
                <CardDescription className=' text-[#010D3E]/70'>{description}</CardDescription>
            </CardContent>
        </Card>
    );
};

export default BulletCard;