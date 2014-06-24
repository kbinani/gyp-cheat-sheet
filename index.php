<!DOCTYPE html>
<html>
<head>
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="assets/css/bootmetro.css">
<link rel="stylesheet" type="text/css" href="assets/js/google-code-prettify/prettify.css">
<link rel="stylesheet" type="text/css" href="doc.css">
<?php
class Page {
  private $name;
  private $buton_index;
  private $description;

  public function __construct($name, $button_index, $description)
  {
    $this->name = $name;
    $this->button_index = $button_index;
    $this->description = $description;
  }

  public function getName()
  {
    return $this->name;
  }

  public function getButtonIndex()
  {
    return $this->button_index;
  }

  public function getDescription()
  {
    return $this->description;
  }
}

class Description {
  private $samples;
  private $button_index;

  public function __construct($samples, $button_index)
  {
    $this->samples = $samples;
    $this->button_index = $button_index;
  }

  public function getSamples()
  {
    return $this->samples;
  }

  public function getButtonIndex()
  {
    return $this->button_index;
  }
}

$page_button_height = 20;
$page_button_offset = 0;
$description_button_height = 21;
$description_button_offset = 0;

require_once('cheet_sheet_contents_definition.php');

?>
</head>
<body class="bs-docs-docs">
<div class="navbar metro-navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <h1 class="brand">GYP cheat sheet</h1>
    </div>
  </div>
</div>
<div id="doc-container" class="container">
  <div class="config_panel">
    <div class="config_panel_contents">
      <div class="list_view">
        <div class="list_view_contents">
<?php
  foreach ($pages as $page) {
    $button_index = $page->getButtonIndex();
    $top = $page_button_offset + $button_index * $page_button_height;
    print sprintf('<div data-gypcs-page="msvs_page_%s" class="page_select_button" style="top: %dpx"></div>', $page->getName(), $top) . "\n";
  }
?>
        </div>
      </div>
      <div class="property_grid">
<?php
  foreach ($pages as $page) {
    $name = $page->getName();
    print sprintf('<div id="msvs_page_%s" class="page page_%s">', $name, $name) . "\n";
    print sprintf('<img src="image/page_%s.png"/>', $name) . "\n";
    foreach ($page->getDescription() as $description_title => $description) {
      $button_index = $description->getButtonIndex();
      $top = $description_button_offset + $button_index * $description_button_height;
      print sprintf('<div data-gypcs-description="msvs_description_%s_%s" class="description_select_button" style="top: %dpx"></div>', $name, $description_title, $top) . "\n";
    }
    print '</div>' . "\n";
    print "\n";
  }
?>
      </div>
    </div>
  </div>
  <div class="code">

<?php
  foreach ($pages as $page) {
    $name = $page->getName();
    foreach ($page->getDescription() as $description_title => $description) {
      print sprintf('<div id="msvs_description_%s_%s" class="description">', $name, $description_title) . "\n";
      foreach ($description->getSamples() as $sample) {
        print sprintf('<pre class="prettyprint">%s</pre>', $sample) . "\n";
      }
      print '</div>' . "\n";
    }
  }
?>

  </div>
  <div class="clearfix"></div>
</div>

<script src="assets/js/jquery-1.10.0.min.js"></script>
<script type="text/javascript" src="assets/js/google-code-prettify/prettify.js"></script>
<script type="text/javascript" src="assets/js/min/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/bootmetro.js"></script>
<script type="text/javascript">
$(document).ready(function() {
  var gypcs = {
    language: 'ja',
  };

  /**
   * description
   */
  var select_description_by_button = function($button_element) {
    $(".description").css('visibility', 'hidden');
    $('.description_select_button').removeClass('selected_button');
    if ($button_element) {
      var description_element_id = $button_element.attr('data-gypcs-description');
      $('#' + description_element_id).css('visibility', 'visible');
      $button_element.addClass('selected_button');
    }
  };

  $('.description_select_button').click(function(event) {
    select_description_by_button($(event.target));
  });

  /**
   * page
   */
  var select_page_by_button = function($button_element) {
    $('.page').css('visibility', 'hidden');
    $('.page_select_button').removeClass('selected_button');
    var page_id = $button_element.attr('data-gypcs-page');
    $('#' + page_id).css('visibility', 'visible');
    $button_element.addClass('selected_button');
    select_description_by_button();
  };
  
  $('.list_view_contents > .page_select_button').click(function(event) {
    select_page_by_button($(event.target));
  });

  // select first page and description
  select_page_by_button($('.page_select_button').first());
  select_description_by_button($('.description_select_button').first());

  window.prettyPrint && prettyPrint();

  $(".config_panel_contents").css('transform', 'scale(0.7)')
                             .css('transform-origin', '0 0');
});
</script>
</body>
</html>
