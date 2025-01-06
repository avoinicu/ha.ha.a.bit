import { SiGithub } from '@icons-pack/react-simple-icons';
import { Heart } from 'lucide-react';

import { cn } from '~/lib/utils';

import { buttonVariants } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full">
      <div className="container flex justify-end gap-2 p-4 mx-auto border-t-[1px] rounded-t-lg bg-background border-zinc-200 dark:border-zinc-800">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              href="https://avoinicu.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Heart className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Made with passion by...</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <a
              className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}
              href="https://github.com/avoinicu/ha.ha.a.bit"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SiGithub className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </TooltipTrigger>
          <TooltipContent>View the code</TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export { Footer };
