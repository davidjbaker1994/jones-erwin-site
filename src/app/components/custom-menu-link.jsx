import {useLink} from "@nextui-org/react";
import { forwardRef } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import {NavbarMenuItem} from "@nextui-org/react";

const CustomMenuLink = forwardRef((props, ref) => {
  const {
    Component,
    children,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
  });

  const pathName = usePathname();

  return (
    <NavbarMenuItem key={props.key} isActive={props.href === pathName}>
      <Component {...getLinkProps()}>
        <>
          {children}
        </>
      </Component>
    </NavbarMenuItem>
  );
});

CustomMenuLink.displayName = "CustomMenuLink";

export default CustomMenuLink;