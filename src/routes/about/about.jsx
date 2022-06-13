import './_about.styles.scss'

import img from '../../images/photo_2021-11-12_14-32-15.jpg'

const About = () => {
    return (
        <>
            <section id="about">
                <div className="h2-container">
                    <h2>About Me</h2>
                </div>
                <div className="about-img"><img src={img} alt="Me"/></div>
                <div className="text-container">
                    <div className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, in modi omnis autem consectetur sit tempore doloremque accusamus ab voluptatum iste laboriosam blanditiis culpa accusantium mollitia fugiat eligendi ut fugit! Fugit, iste quaerat. Consectetur, est nihil, sapiente numquam amet esse neque fugit magni eum harum sed fugiat commodi cum consequatur laborum itaque dignissimos et quaerat ducimus mollitia sit explicabo! Ut facilis id distinctio ad enim. Perspiciatis ducimus culpa commodi, esse obcaecati quaerat velit cupiditate maxime. Ducimus optio at itaque sint deserunt laboriosam obcaecati laudantium perferendis cumque, placeat pariatur nam atque saepe corrupti beatae ut quos explicabo fugiat neque deleniti quaerat. Possimus illum quaerat suscipit, quos cumque, impedit repellendus, saepe corporis dignissimos commodi voluptates! Quaerat excepturi assumenda quod doloribus non error animi autem? Tempore nobis enim deleniti dolores perferendis voluptatibus, magni amet laborum impedit reprehenderit quidem numquam, aperiam rerum ratione quaerat illo repellendus fugiat libero delectus earum cumque quo nisi. Dolorem?</div>
                </div>

                <div className="skill-container">
                    <h3>My Skills</h3>
                    <div className="icon-container">
                        <div><i className="fab fa-html5"></i></div>
                        <div><i className="fab fa-css3"></i></div>
                        <div><i className="fab fa-sass"></i></div>
                        <div><i className="fab fa-github"></i></div>
                        <div><i className="fab fa-js"></i></div>
                        <div><i className="fab fa-php"></i></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About