'use client';
import { cn } from '@/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

export function SecondLettrePullUp({
    text,
    highlightedText = '',
    className = '',
    highlightClassName = '',
}: {
    text: string;
    highlightedText?: string;
    className?: string;
    highlightClassName?: string;
}) {
    const splittedText = text.split('');
    const pullupVariant = {
        initial: { y: 10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.05,
            },
        }),
    };
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="flex justify-center">
            {splittedText.map((current, i) => (
                <motion.div
                    key={i}
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={i}
                    className={cn(
                        'text-2xl lg:text-6xl sm:text-4xl md:text-6xl  font-bold',
                        className
                    )}
                >
                    {current === ' ' ? <span>&nbsp;</span> : current}
                </motion.div>
            ))}
            {highlightedText && (
                <motion.div
                    ref={ref}
                    variants={pullupVariant}
                    initial="initial"
                    animate={isInView ? 'animate' : ''}
                    custom={splittedText.length}
                    className={cn(
                        'text-titleColor font-medium font-covered ml-2',
                        highlightClassName
                    )}
                >
                    {highlightedText}
                </motion.div>
            )}
        </div>
    );
}
