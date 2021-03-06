<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <title>Random Pictures</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/semantic-ui/2.2.7/semantic.min.css">
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>
<body>

    <div class="ui centered grid">
        <div class="column">
            <div class="ui center aligned container">
                <h1>Random Pictures</h1>
                <h2>"A fine selection of the best pictures worldwide"</h2>
                <img id="pics" src="/img/img-17.jpg"/>
                <div class="bloc">
                    <div id="choose" class="massive ui fluid teal button">Choose another picture</div>
                    <div class="ui massive form">
                        <div class="two fields">
                            <div class="field">
                                <label for="width">Width</label>
                                <input id="width" type="text" name="width" value="700">
                            </div>
                            <div class="field">
                                <label for="height">Height</label>
                                <input id="height" type="text" name="height" value="400">
                            </div>
                        </div>
                        <div id="resize" class="massive ui fluid submit button">Resize</div>
                    </div>
                    <br>
                    <div class="ui big fluid action input">
                        <input id="url" type="text"/>
                        <button id="copy" data-clipboard-target="#url" class="ui massive yellow right labeled icon button">
                            <i class="copy icon"></i>Copy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script> window.Laravel = { csrfToken : "{{csrf_token()}}"}; </script>
    <script src="{{mix('/js/app.js')}}"></script>
    <script src="https://cdn.jsdelivr.net/clipboard.js/1.6.0/clipboard.min.js"></script>
    <script src="https://cdn.jsdelivr.net/semantic-ui/2.2.7/semantic.min.js"></script>
</body>
</html>