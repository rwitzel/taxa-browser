An interactive [Taxa Browser](https://rwitzel.github.io/taxa-browser/).

## Data source

Data were downloaded from [paleobiodb.org](https://paleobiodb.org).

## Alternatives

There are numerous alternatives, have a look at Wikipedia's
[List of phylogenetic tree visualization software](https://en.wikipedia.org/wiki/List_of_phylogenetic_tree_visualization_software).

A selection:

* [ETE Toolkit](http://etetoolkit.org/) - A Python framework to work with trees, especially supporting taxanomies, 
  numerous, awesome visualization options, awesome documentation, perfect for Jupyter notebooks
  * [Phylogenetic tree (newick) viewer](http://etetoolkit.org/treeview/) - an interactive example
  * [Phylome DB](http://phylomedb.org/?q=search_tree&seqid=YBL058W) - another interactive example
* [NCBI Taxonomy Browser](https://www.ncbi.nlm.nih.gov/Taxonomy/taxonomyhome.html/) - a lot information for each taxa
* [PaleobioDB Taxa Browser](https://github.com/UW-Macrostrat/taxa-browser) - Shows ancestors for a given species 
  and statistics for the descendants, very simple user interface, fetches data from paleobiodb.org


### Developing

If you want to view the pages locally, run a local HTTP server via docker-compose:

First [install docker-compose](https://docs.docker.com/compose/install/).

Then run

    docker-compose up --build
     
Then open [http://localhost:8081/index.html](http://localhost:8081/index.html) in a web browser.