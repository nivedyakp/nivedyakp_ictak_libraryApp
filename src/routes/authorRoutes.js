const express = require('express');
const authorsRouter = express.Router();
function router(nav){
    var authors = [
        {
            name : 'Joseph Barbera',
            dob : '24 March 1911',
            desc : 'He was born to Italian immigrants in New York City, where he lived, attended college and began his career through his young adult years. After working odd jobs and as a banker, Barbera joined Van Beuren Studios in 1932 and subsequently Terrytoons in 1936. In 1930, he moved to California and while working at Metro-Goldwyn-Mayer (MGM), Barbera met William Hanna. The two men began a collaboration that was at first best known for producing Tom and Jerry. In 1957, after MGM dissolved their animation department, they co-founded Hanna-Barbera, which became the most successful television animation studio in the business, producing programs such as The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound, and The Jetsons. In 1967, Hanna-Barbera was sold to Taft Broadcasting for $12 million, but Hanna and Barbera remained heads of the company.',
            img : "joseph.jpg"
        },
        {
            name : 'Yann Martel',
            dob : '25 June 1963',
            desc : 'Yann Martel (born 25 June 1963) is a Canadian author best known for the Man Booker Prize-winning novel Life of Pi,[1][2][3][4] an international bestseller published in more than 50 territories. It has sold more than 12 million copies worldwide and spent more than a year on the bestseller lists of the New York Times and The Globe and Mail, among many other best-selling lists. It was adapted for a film directed by Ang Kee, garnering four Oscars including Best Director and winning the Golden Globe Award for Best Original Score.',
            img : "yann.jpg"
        },
        {
            name : 'Toni Morrison',
            dob : '18 February 1931',
            desc : 'Toni Morrison was an American novelist, essayist, book editor, and college professor. Her first novel, The Bluest Eye, was published in 1970. The critically acclaimed Song of Solomon (1977) brought her national attention and won the National Book Critics Circle Award. In 1988, Morrison won the Pulitzer Prize for Beloved (1987); she gained worldwide recognition when she was awarded the Nobel Prize in Literature in 1993. Born and raised in Lorain, Ohio, Morrison graduated from Howard University in 1953 with a B.A. in English. In 1995, she earned a masters in American Literature from Cornell University. In 1957 she returned to Howard university, was married, and had two children before divorcing in 1964. In the late 1960s she became the first black female editor in fiction at Random House in New York City. In the 1970s and 1980s, she developed her own reputation as an author, and her perhaps most celebrated work, Beloved, was made into a 1988 film.',
            img : "toni.jpg"
        },
        {
            name : 'Sir. Arthur Conan Doyle',
            dob : '22 May 1859',
            desc : 'Sir Arthur Ignatius Conan Doyle KStJ DL (22 May 1859 – 7 July 1930) was a British writer and physician. He created the character Sherlock Holmes in 1887 for A Study in Scarlet, the first of four novels and fifty-six short stories about Holmes and Dr. Watson. The Sherlock Holmes stories are considered milestones in the field of crime fiction. Doyle was a prolific writer; other than Holmes stories, his works include fantasy and science fiction stories about Professor Challenger and humorous stories about the Napoleonic soldier Brigadier Gerard, as well as plays, romances, poetry, non-fiction and historical novels. One of Doyles early short stories, J.Habakuk Jephsons Statement (1884), helped to popularise the mystery of the May Celeste.',
            img : "arthur.jpg"
        },
        {
            name : 'Josh Malerman',
            dob : '24 July 1975',
            desc : 'Josh Malerman is an American novelist, short story writer, film producer, and one of two singer/songwriters for the rock band The High Strung. He is best known for writing his post-apocalyptic novel, Bird Box, which was the inspiration of the Netflix film Bird Box. In 2020, he founded the production company Spin a Black Yarn with manager Ryan Lewis; their first film, We Need to Do Something, was shot in secret during the 2020 COVID-19 epidemic.',
            img : "josh.jpg"
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            authors
        });
    });
    
    authorsRouter.get('/:il',function(req,res){
        const il = req.params.il
        res.render('author',{
            nav,
            author : authors[il]
        })
    })
    return authorsRouter;
}

module.exports = router;