// import s from './Section.module.css';

const Section = ({title, children}) => (
    <div>
        <h1>{title}</h1>
        {children}    
    </div>
)

export default Section;