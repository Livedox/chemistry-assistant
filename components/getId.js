export default function getId() {
    return (new Date()).getTime().toString() + Math.random().toString() ;
}
