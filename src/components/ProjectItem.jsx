export default function ProjectItem(props) {
    return (
        <div>
            <span>{props.title}
                {props.url}
                {props.img}
                {props.tech}
                {props.date}
                {props.active}</span>
        </div>
    )
}