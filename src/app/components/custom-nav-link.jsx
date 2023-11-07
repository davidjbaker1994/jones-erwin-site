import {useLink} from "@nextui-org/react";
import { forwardRef } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import {NavbarItem} from "@nextui-org/react";

const CustomNavLink = forwardRef((props, ref) => {
  const {
    Component,
    children,
    getLinkProps,
  } = useLink({
    ...props,
    ref,
  });
  
  const pathName = usePathname();
  const isActive = props.href === pathName;

  return (
    <NavbarItem key={props.key} isActive={isActive}>
      <Component color={ isActive ? 'secondary' : 'primary'} {...getLinkProps()}>
        <>
          {children}
        </>
      </Component>
    </NavbarItem>
  );
});



CustomNavLink.displayName = "CustomNavLink";

export default CustomNavLink;

