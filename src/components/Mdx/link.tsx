interface MyProp {
  children?: any;
  href?: string;
  title?: string;
}
// { children, href, title }: MyProp
export default function MyLink(props: any) {
  if(props.className === 'Link--inTextBlock' && props.href.includes('https://gist.github.com/Cheersupzoo')) {
    return <a {...props} />
  }

  return (
      <a
        className="text-blue-800 font-medium hover:underline whitespace-pre-wrap break-words "
        target={
          new RegExp(/^#[^:/?\n]+/).test(props.href as string)
            ? undefined
            : "_blank"
        }
        rel="noreferrer"
        href={props.href}
        
      >
        {props.title ?? props.children}
      </a>
  );
}
