<h1>Search It
</h1>
<ul>
  <li>Search-It is a HTML file Search engine.
  </li>
  <li>It is very small and all in one HTML file.
  </li>
  <li>It Consits of many types of search modes Privacy Enhanced, Entire Web, etc...
  </li>
  <li>To use this go to 
    rajaniraiyn.github.io/Search-It/.
  </li>
</ul>
<br>
<h2>How this on privacy?
</h2>
<ul>
  <li>While using this we can remove 
    <b>unwanted url trackers.
    </b>
  </li>
  <li>I made this as much small as possible I can. So there is 
    <b>nothing else
    </b> other than I mentioned.
  </li>
  <br>
  <h2>Queries
  </h2>
  <ul>
    <li>It has two types of queries
    </li>
    <ol>
      <li>For Complete search: https://rajaniraiyn.github.io/Search-It/?c={query}
      </li>
      <li>For Private search: https://rajaniraiyn.github.io/Search-It/?p={query}
      </li>
    </ol>
    <li>Either of them redirect queries by a javascript in the top of the main HTML file
    </li>
    <li>
      ```js
      const params=new URLSearchParams(window.location.search),
              a=params.get("c"),
              b=params.get("p");
        1!=a+1?location.replace("https://google.com/search?q="+params.get("c")):
        1!=b+1?location.replace("https://duckduckgo.com/?q="+params.get("p")):
        a+b+1==1?console.log():
        alert("Oops! Error occured please try another");
      ```
    </li>
  </ul>
  <br>
  <b>Note:
  </b>
  <ul>
    <li>I am continually working on to make it a separate search engine.
    </li>
    <li>Anybody who is interested in this can improve this or join me.
    </li>
  </ul>
