'use client';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

type ScrollAnimationProps = {
    children: React.ReactNode;
    className?: string;
    variants: any;
    once?: boolean;
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
    children,
    className = '',
    variants,
    once = true,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};
