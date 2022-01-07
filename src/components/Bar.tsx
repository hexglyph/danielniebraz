
export default function Bar(props) {
    const barwidth = `${props.level}%`

    function barlvl() {
        const barlvlmd = ''
        if (props.level >= 75) {
            return 'from-blue-600 to-cyan-500'
        } else if (props.level < 75 && props.level >= 50) {
            return 'from-amber-600 to-cyan-500'
        } else {
            return 'from-pink-600 to-amber-500'
        }
    }

    return (
        <div className={`flex flex-col text-white rounded ml-4 mr-4 mb-2`}>
            <span className={``}>{props.name}</span>
            <div className={`flex items-center px-4 py-1 rounded-full bg-gradient-to-r ${barlvl()}`} style={{ width: barwidth }}>

            </div>
        </div>
    )
}
