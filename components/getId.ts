export default function getId(): string {
    return (new Date()).getTime().toString() + Math.random().toString() ;
}
