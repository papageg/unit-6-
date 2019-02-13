const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

//In the router.get this will grab the data for which project is chosen. This information gets sent to project.pug
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const focusProject = projects[id];
    const title = focusProject.projectName;
    const { description, technologies } = focusProject;
    const links = [ focusProject.live_link, focusProject.github_link ];
    const everyImg = [];

    //The for function here will add each image to the everyImg constant above.
    for (let i = 0; i < focusProject.image_urls.length; i++) {
        everyImg.push(focusProject.image_urls[i]);
    }

    const templateData = { title, description, technologies, links, everyImg };

    res.render('project', templateData);
});


module.exports = router; 