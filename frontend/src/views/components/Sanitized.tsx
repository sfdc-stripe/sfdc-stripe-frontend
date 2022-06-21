import striptags from "striptags";

export const Sanitized = ({ html }: { html: string }) => <>{striptags(html)}</>;
