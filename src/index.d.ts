import 'react'
declare module 'react' {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean | undefined | string;
        global?: boolean;
      }
}