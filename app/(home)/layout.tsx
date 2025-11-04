import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout
    {...baseOptions()}
    links={[
      {
        type: 'custom',
        // only displayed on navbar, not mobile menu
        on: 'nav',
        children: (
          <NavbarMenu>
            <NavbarMenuTrigger>Docs</NavbarMenuTrigger>
            <NavbarMenuContent>
              <NavbarMenuLink href="/docs">Hello World</NavbarMenuLink>
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      },
      {
        type: 'custom',
        // only displayed on navbar, not mobile menu
        on: 'nav',
        children: (
          <NavbarMenu>
            <NavbarMenuTrigger>Projects</NavbarMenuTrigger>
            <NavbarMenuContent>
              <NavbarMenuLink href="/projects">Hello World</NavbarMenuLink>
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      },
      {
        type: 'custom',
        // only displayed on navbar, not mobile menu
        on: 'nav',
        children: (
          <NavbarMenu>
            <NavbarMenuTrigger>Blogs</NavbarMenuTrigger>
            <NavbarMenuContent>
              <NavbarMenuLink href="/blogs">Hello World</NavbarMenuLink>
            </NavbarMenuContent>
          </NavbarMenu>
        ),
      },
      // other items
    ]}
  >{children}</HomeLayout>;
}
