
var documents = [{
    "id": 0,
    "url": "https://cookiecode.dev/404.html",
    "title": "404",
    "body": "404  Look like you're lost  The page you are looking for is not available !   homepage&lt;/p&gt;"
    }, {
    "id": 1,
    "url": "https://cookiecode.dev/about/",
    "title": "About me",
    "body": "Developer Advocate, enthusiast attracted by Clean Code concepts and maintainability principles (yeah for real… I really like to cleanup code). LanguagesI consider myself as language agnostic beside the fact that I mostly use to program in JAVA. It’s just syntax after all. The most important concepts are valid for all languages, what is required is the “Programmer spirit”. OSS supporterAs most of developers, I used to consume open source software (in professional life but also for private projects). No doubt about the amazing job that these people do (biggup to them btw). Since a few years now, I also try to contribute to this amazing world of OSS. I am surely not maintainer of huge projects such as Linux Kernel but still I try to share what I can with others at my level :) If you are interested to my open sources contributions you can have a look at my open source projects or my contributions on github. "
    }, {
    "id": 2,
    "url": "https://cookiecode.dev/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://cookiecode.dev/",
    "title": "Home",
    "body": "Blog articles                                                    [Howto] Create a voice reminder for daily meeting using NodeRed          17 Jun 2022               info “Pre requisiste”This article suppose you have a running nodered instance.  If you don’t have one yet have a look here first.                              nodered                           sonos                           hue                           scrum                                                                      [Howto] Convert a text to a speech audio file for free using TTSMP3          16 Jun 2022              Sometimes you might need to have some audio sound based on text. Such tools are called TTS (Text to Speech). Many exists but rarely for free.                              tts                                                                      [Howto] Create your own app for UnRaid          14 Jun 2022              Unraid provide an App store via its community app plugin:                             docker                                                                      Falmeshot - Do screenshots and annotate them in seconds !          10 Jun 2022              Introduction                             linux                           windows                           mac                           screenshot                                                                      [WIP][How to] Fix Jetbrains shortcuts on i3wm          10 Jun 2022              Introduction                             linux                           i3wm                                                                      [Howto] Bind PrtScr key in i3wm with Falmeshot to take screenshots          10 Jun 2022              nano ~/. config/i3/config (or vim whatever)                             i3wm                         &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 4,
    "url": "https://cookiecode.dev/oss/",
    "title": "Open Source Software",
    "body": "    OSS projects I maintain or contribute actively      {% for project in site. oss %}                                    {{ project. title }}                          {{ project. description }}                      {% endfor %}  "
    }, {
    "id": 5,
    "url": "https://cookiecode.dev/robots.txt",
    "title": "",
    "body": "User-agent: *Sitemap: {{ site. url }}/sitemap. xml "
    }, {
    "id": 6,
    "url": "https://cookiecode.dev/categories/languages/",
    "title": "languages",
    "body": ""
    }, {
    "id": 7,
    "url": "https://cookiecode.dev/categories/java/",
    "title": "java",
    "body": ""
    }, {
    "id": 8,
    "url": "https://cookiecode.dev/categories/tools/",
    "title": "tools",
    "body": ""
    }, {
    "id": 9,
    "url": "https://cookiecode.dev/categories/design-pattern/",
    "title": "design pattern",
    "body": ""
    }, {
    "id": 10,
    "url": "https://cookiecode.dev/categories/linux/",
    "title": "linux",
    "body": ""
    }, {
    "id": 11,
    "url": "https://cookiecode.dev/categories/unraid/",
    "title": "unraid",
    "body": ""
    }, {
    "id": 12,
    "url": "https://cookiecode.dev/categories/iot/",
    "title": "iot",
    "body": ""
    }, {
    "id": 13,
    "url": "https://cookiecode.dev/page2/",
    "title": "Home",
    "body": "Blog articles  {% for post in paginator. posts %}  {% include postbox. html %}  {% endfor %}  {% include pagination. html %}"
    }, {
    "id": 14,
    "url": "https://cookiecode.dev/iot/nodered-daily-reminder.html",
    "title": "[Howto] Create a voice reminder for daily meeting using NodeRed",
    "body": "2022/06/17 -     Pre requisiste This article suppose you have a running nodered instance. If you don’t have one yet have a look here first.  Goal:     As a passionated programmer I need a reminder at `08:58` each working day (monday to friday) That way if I am totally focussed on my coding session I still get a reminder.  Acceptance criteria::  A notification sound will be played in SONOS to remind me about it (audio effect)     This sound will be generated using ttsmp3. com free online tool         given text: Sir, the daily meeting starts in a few. Are you ready ?     voice: US English / Matthew     note: You can download the mp3 file here directly           A philips HUE effect will appear on my led strip (visual effect)This way we have some fallback in the system and can reduce late joins of 99. 9% :+1: Implementation using NodeRed: In order to achieve that we will need two nodered extensions:  Sonos Hue    TO COMPLETE  Basically here we will have the following flow: First we trigger this only at 08:58 during working days:     Warning Node red will use the timezone defined in your instance. (If you run under docker you can define it via the env TZ=Europe/Paris or something else based on your region. ) (This concerns point 2) of the screenshot)  Then we trigger some actions     TO COMPLETE  Here is the snippet of code that you can import into node red directly: 1// TO DOReferences: "
    }, {
    "id": 15,
    "url": "https://cookiecode.dev/tools/ttsmp3-free-online-text-to-speech.html",
    "title": "[Howto] Convert a text to a speech audio file for free using TTSMP3",
    "body": "2022/06/16 - Sometimes you might need to have some audio sound based on text. Such tools are called TTS (Text to Speech). Many exists but rarely for free. I share with you one that I particularly like to use for my personal home automation notifications: It is totally free for a normal usage (Maximum 3K characters a day). I give you here an example so you can see how easy it is: ConclusionI hope you will enjoy this tool if you have free other online tools to suggest please leave a comment! Cheers "
    }, {
    "id": 16,
    "url": "https://cookiecode.dev/unraid/unraid-create-custom-docker-template.html",
    "title": "[Howto] Create your own app for UnRaid",
    "body": "2022/06/14 - Unraid provide an App store via its community app plugin: With this it becomes really easy for everyone to install any app on Unraid: Just click install and voila your Unraid server is up and running. What about publishing your own app there ? Wouldn’t it be a great way to let it get adopted by the whole unraid community ? If you ask me I will tell you: Yes definitely! Furthermore this is totally free and very easy compared to some other ecosystems. Let’s have a look about that! Create your own app store: I created mine here if you are interested in the end results feel free to have a look: https://github. com/sebastienvermeille/unraid-docker-templates Let’s see how it works: 1) First you have to create a public git repository (on github or whatever)2) Then inside of it we will declare some templates for our docker applications. Here is the template I have created for sonos2mqtt app: 12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273sonos2mqtt. xml&lt;?xml version= 1. 0 ?&gt;&lt;Container version= 2 &gt;  &lt;Name&gt;sonos2mqtt&lt;/Name&gt;  &lt;Registry&gt;https://hub. docker. com/r/svrooij/&lt;/Registry&gt;  &lt;Repository&gt;svrooij/sonos2mqtt&lt;/Repository&gt;  &lt;Github&gt;https://github. com/svrooij/sonos2mqtt&lt;/Github&gt;  &lt;Network&gt;bridge&lt;/Network&gt;  &lt;MyIP/&gt;  &lt;Privileged&gt;false&lt;/Privileged&gt;  &lt;Support&gt;https://svrooij. github. io/sonos2mqtt&lt;/Support&gt;  &lt;Project/&gt;  &lt;Overview&gt;    Bridge between Sonos and mqtt server    Provide features like notifications or text-to-speech, publish sonos status to mqtt and so on.   &lt;/Overview&gt;  &lt;Category&gt;HomeAutomation:&lt;/Category&gt;  &lt;WebUI&gt;http://[IP]:[PORT:8080]/status&lt;/WebUI&gt;  &lt;TemplateURL/&gt;  &lt;Icon&gt;https://raw. githubusercontent. com/sebastienvermeille/unraid-docker-templates/main/images/mqtt2sonos_icon. png&lt;/Icon&gt;  &lt;ExtraParams/&gt;  &lt;PostArgs/&gt;  &lt;DateInstalled&gt;1527397055&lt;/DateInstalled&gt;  &lt;DonateText/&gt;  &lt;DonateLink/&gt;  &lt;DonateImg/&gt;  &lt;MinVer/&gt;  &lt;Description&gt;It is very important to set the `Ip of this docker (sonos listener host)` field correctly otherwise the web    ui won't work. (You can run this container without then grab the ip edit and set it)&lt;/Description&gt;  &lt;Networking&gt;    &lt;Mode&gt;bridge&lt;/Mode&gt;    &lt;Publish&gt;      &lt;Port&gt;        &lt;HostPort&gt;6329&lt;/HostPort&gt;        &lt;ContainerPort&gt;6329&lt;/ContainerPort&gt;        &lt;Protocol&gt;tcp&lt;/Protocol&gt;      &lt;/Port&gt;    &lt;/Publish&gt;  &lt;/Networking&gt;  &lt;Data&gt;    &lt;Volume&gt;      &lt;HostDir&gt;/mnt/user/appdata/sonos2mqtt&lt;/HostDir&gt;      &lt;ContainerDir&gt;/data&lt;/ContainerDir&gt;      &lt;Mode&gt;rw&lt;/Mode&gt;    &lt;/Volume&gt;  &lt;/Data&gt;  &lt;Environment/&gt;  &lt;Labels/&gt;  &lt;Config Name= Host Port  Target= 6329  Default= 6329  Mode= tcp  Description= Container Port: 6329  Type= Port  Display= always       Required= true  Mask= false &gt;6329&lt;/Config&gt;  &lt;Config Name= IP of one known sonos speaker  Target= SONOS2MQTT_DEVICE  Default=        Description= (device discovery doesnt always work inside docker)  Type= Variable  Display= always  Required= true       Mask= false &gt;&lt;/Config&gt;  &lt;Config Name= Mqtt connection string  Target= SONOS2MQTT_MQTT  Default=        Description= mqtt(s)://[user]:[password]@[host]:[port]  Type= Variable  Display= always  Required= true       Mask= false &gt;&lt;/Config&gt;  &lt;Config Name= Publish distinct (optional)  Target= SONOS2MQTT_DISTINCT  Default= true       Description= Publish distinct or not  Type= Variable  Display= advanced  Required= false       Mask= false &gt;true&lt;/Config&gt;  &lt;Config Name= Ip of this docker (sonos listener host)  Target= SONOS_LISTENER_HOST  Default=        Description=   Type= Variable  Display= always  Required= true       Mask= false &gt;&lt;/Config&gt;  &lt;Config Name= AppData Config Path  Target= /config  Default= /mnt/user/appdata/sonos2mqtt  Mode= rw       Description= Container Path: /config       Type= Path  Display= advanced-hide  Required= true  Mask= false &gt;/mnt/user/appdata/sonos2mqtt&lt;/Config&gt;  &lt;Config Name= Text to speech endpoint url (optional)  Target= SONOS_TTS_ENDPOINT  Default=        Description=   Type= Variable  Display= always  Required= false       Mask= false &gt;&lt;/Config&gt;  &lt;Config Name= Text to speech language (optional)  Target= SONOS_TTS_LANG  Default= en-US       Description=   Type= Variable  Display= always  Required= false       Mask= false &gt;&lt;/Config&gt;&lt;/Container&gt;As you can see it’s just a simple xml file declaring a bit ports, environment variables, paths and so on. You can define here multiple type of configurations:  Variable: ENV variable name Port: A port mapping Path: A path exposedFor more details you can read this page of unraid’s wiki it’s very good documented. 3) Then we have to tell unraid to fetch our templatesTo do so you simply go to your unraid instance and select the Docker tab.  Then on the bottom of the page add the url of the git repository you have created at step 1): And click SAVE. 4) Now you can create a docker container with your template: Click on and then select your own template: And then all the configuration you defined in the xml file will be rendered as follow: As you can see we can define custom values, optional values, masked values for password etc. it is really powerful thank’s Unraid Devs! Integrate your docker template repository with the community apps plugin: TODO References:  Docker template schema Docker FAQ - Host app on community applications plugin. "
    }, {
    "id": 17,
    "url": "https://cookiecode.dev/tools/linux-screenshots-flameshot.html",
    "title": "Falmeshot - Do screenshots and annotate them in seconds !",
    "body": "2022/06/10 - Introduction: As developer we have to explain stuff. This is our DNA, explain how the program works, explain where the user has to click and so on. I falled in love with this great tool called Flameshot which works on Linux Mac and Windows and is totally free. How it works: Just push your prt scr shortcut and then you are in! As you can see there are plenty of usefull tools which appears, first you select the area which interest you (crop). And then you can:  Draw squares, arrows, lines, circles, free draw Add texts Add numbered circles (they increment at each click very handy!) You can blur some sensitive data …You can download it here: https://flameshot. org/#download Conclusion: A super powerful tool for free and which does the job! References:  Flameshot - Official website"
    }, {
    "id": 18,
    "url": "https://cookiecode.dev/tools/Fix-jetbrains-shortcuts-i3.html",
    "title": "[WIP][How to] Fix Jetbrains shortcuts on i3wm",
    "body": "2022/06/10 - Introduction: 1) In jetbrains toolbox app &gt; tools: enable generate shortcuts and define the path to be ~/. local/bin 1PATH=$PATH:~/. local/binNote: It will only work for new installations (remove and reinstall your apps evtl) References:  Jetbrains youtrack ticket"
    }, {
    "id": 19,
    "url": "https://cookiecode.dev/linux/Bind-flameshot-to-printscr-i3wm.html",
    "title": "[Howto] Bind PrtScr key in i3wm with Falmeshot to take screenshots",
    "body": "2022/06/10 - nano ~/. config/i3/config (or vim whatever) 1234# ~/. config/i3/config# bind flameshot to printscr buttonbindsym Print exec flameshot guiThen:i3-msg reload and i3-msg restart Voila ! "
    }, {
    "id": 20,
    "url": "https://cookiecode.dev/design%20pattern/stepbuilder-pattern.html",
    "title": "Step Builder - Design pattern",
    "body": "2022/06/09 - The StepBuilder pattern is a derivative of Builder pattern. You may never have heard about this pattern as it is not common to find it mentioned in books/articles about design patterns. This design pattern is part of the object creation design pattern category. It helps to create an instance of a class, but in a more assisted way than a builder would do. What does it solve: As opposite to a general builder, the step builder assist the developer providing guidance during the object creation. Each steps declare the next step so that the developer can not do any mistake or forget some mandatory steps. Here is an example using traditional builder for an email: As we can see in point (1) the autocomplete show us methods: . withContent(), . withFrom(), . withTitle(), . withTo() methods and . build() right after having invoked . builder(). Which means that we could simply write the following code and have something perfectly fine regarding compilation: 123// Example: Builder pattern weakness - can build empty objectsfinal var email = Email. builder() . build();Does it make sense to have an Email instance without any from, to properties set ? Not really…     But the build() method could check for that and ensure that required fields are provided no ? That’s perfectly right. But remember: it will only display the issue at runtime.  Wouldn’t it be better if we could enforce a bit the autocomplete to provide only invokable methods ? Step builder pattern address this issue: Using step builder pattern you no longer can forget to define from, to, title, content properties when creating an Email instance. Furthermore the order is controlled. As you can see we can not call . setContent() method in the beginning. There is a sequence which define in which order each method can be called. Cool but how does it works ?: The trick is to use a specific interface per step. 123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778// Email. java - StepBuilder implementation@Getter@ToStringpublic class Email { private final String from; private final String to; private final String title; private final String content; private Email(final Builder builder) {  from = builder. from;  to = builder. to;  title = builder. title;  content = builder. content; } public static IFrom builder() { // (1) &lt;-- here we expect IFrom   return new Builder(); } public interface IFrom { // (2) &lt;-- IFrom declares ITo withFrom(String val)  ITo withFrom(String val); } public interface ITo { // (3) &lt;-- ITo -&gt; ITitle -&gt; IContent  ITitle withTo(String val); } public interface ITitle { // (4) &lt;-- ITitle -&gt; IContent   IContent withTitle(String val); } public interface IContent { // (5) &lt;-- IContent -&gt; IBuild   IBuild withContent(String val); } public interface IBuild { // (6) &lt;-- IBuild -&gt; Email instance! Woohoo :)   Email build(); } public static final class Builder implements IContent, ITitle, ITo, IFrom, IBuild {  private String content;  private String title;  private String to;  private String from;  private Builder() {  }  @Override  public IBuild withContent(final String val) {   content = val;   return this;  }  @Override  public IContent withTitle(final String val) {   title = val;   return this;  }  @Override  public ITitle withTo(final String val) {   to = val;   return this;  }  @Override  public ITo withFrom(final String val) {   from = val;   return this;  }  public Email build() {   return new Email(this);  } }}This code can be written by hand but let’s be honest it would be much easier with a generator no ? Good news, a lot of generator exists for multiple IDE. If you are using IntelliJ I suggest you this plugin that I maintain: stepbuilder-codegen. You can generate this code in a very few steps. Conclusion: As usual for design pattern you can find my example implementation here. This pattern provide compile time issue when an object is not correctly constructed which is definitely a plus. I like the fluent coding style which render the code much more intuitive. This is like some UX design for developers using your API. I see it as a quality when an API provide such way of using it. I was used to Mockito (a testing library for Java) which provide some fluent API too. References:  IntelliJ plugin to generate StepBuilder.  Svlada article Martin Fowler - FluentInterface"
    }, {
    "id": 21,
    "url": "https://cookiecode.dev/tools/git-ignore-io.html",
    "title": "Gitignore.io - Generate your gitignore files in seconds!",
    "body": "2022/06/08 - Introduction: Writing a good and efficient . gitignore file might be difficult if we consider everything:  Each IDE / Operating System add its kind of files and pollute your git repository with things which should not be there. (Thumbs. db, . DS_Store, . project, . idea/, . . . )If you plan to share your git account with multiple developers, then many chances are that they will not be on the same OS, IDE than you causing some undesired files being pushed to your git repository. In order to simplify the life of each contributor of your project (and even yours) having a good . gitignore is important. To avoid that I personally use a free online tool called gitignore. io which generates a . gitignore file based on some tags that I provide. This is very handy and incredibly fast! How it works: 1) Choose some predefined tags 2) Click Create, and then you will have a generated content to copy and paste into your . gitignore file similar to this: 12345678910111213141516171819# . gitignore# Created by https://www. toptal. com/developers/gitignore/api/java,maven,windows,macos,jetbrains+all,eclipse,netbeans,visualstudiocode# Edit at https://www. toptal. com/developers/gitignore?templates=java,maven,windows,macos,jetbrains+all,eclipse,netbeans,visualstudiocode### Eclipse ### :fire:. metadatabin/tmp/*. tmp*. bak*. swp*~. niblocal. properties. settings/. loadpath. recommenders# External tool builders. externalToolBuilders/3) Last but not least you can at any time add new tags by using the edit link provided. In this example: https://www. toptal. com/developers/gitignore?templates=java,maven,windows,macos,jetbrains+all,eclipse,netbeans,visualstudiocode Conclusion: This tool is really handy to me, I hope it will be also for you References:  gitignore. io"
    }, {
    "id": 22,
    "url": "https://cookiecode.dev/languages/java/spring-webflux-onErrorReturn-catch-exceptions.html",
    "title": "How to handle exceptions on @RestController with springboot webflux when the underservice return a Mono.error()",
    "body": "2021/04/24 - I had issue to handle exceptions using webflux and found the solution in this video. References:  https://youtu. be/Lc3dHbQ-CFo?t=380"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});