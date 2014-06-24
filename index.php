<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="assets/css/bootmetro.css">
<link rel="stylesheet" type="text/css" href="assets/js/google-code-prettify/prettify.css">
<link rel="stylesheet" type="text/css" href="doc.css">
<?php
class Page {
  private $name;
  private $buton_index;
  private $description;
  private $page_height_px;

  public function __construct($name, $button_index, $page_height_px, $description)
  {
    $this->name = $name;
    $this->button_index = $button_index;
    $this->page_height_px = $page_height_px;
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

  public function getPageHeightInPixel()
  {
    return $this->page_height_px;
  }

  public function getPageWidthInPixel()
  {
    return 702;
  }

  public function getDescription()
  {
    return $this->description;
  }
}

class Description {
  private $samples;
  private $button_index;
  private $button_height;

  public function __construct($samples, $button_index, $button_height = 1)
  {
    $this->samples = $samples;
    $this->button_index = $button_index;
    $this->button_height = $button_height;
  }

  public function getSamples()
  {
    return $this->samples;
  }

  public function getButtonIndex()
  {
    return $this->button_index;
  }

  public function getButtonHeight()
  {
    return $this->button_height;
  }
}

$page_button_height = 20;
$page_button_offset = 0;
$description_button_distance = 21;
$description_button_height = 19;
$description_button_offset = 0;
$config_panel_scale = 0.8;

require_once('cheat_sheet_contents_definition.php');

?>
</head>
<body class="bs-docs-docs">

<div class="navbar metro-navbar navbar-fixed-top">
  <div class="navbar-inner">
    <div class="container">
      <h1 class="brand">
        <a href="index.html">GYP cheat sheet</a>
        <small>for VisualStudio</small>
      </h1>      
    </div>
  </div>
</div>

<div id="doc-container" class="container">
  <div class="config_panel">
    <img src="image/config_panel.png" class="config_panel_background"/>
    <div class="config_panel_contents">
      <div class="config_panel_contents_background_container">
        <img src="image/listview.png" class="config_panel_contents_background"/>

<?php
  foreach ($pages as $page) {
    $button_index = $page->getButtonIndex();
    $top = ($page_button_offset + $button_index * $page_button_height) * $config_panel_scale;
    print sprintf('<div data-gypcs-page="msvs_page_%s" class="page_select_button" style="top: %dpx"></div>', $page->getName(), $top) . "\n";
  }
?>
      </div>
    </div>

    <div class="config_properties">

<?php
  foreach ($pages as $page) {
    $name = $page->getName();
    print sprintf('<div class="config_property" id="msvs_page_%s">', $name) . "\n";
    $height = $page->getPageHeightInPixel() * $config_panel_scale - 1;
    $width = $page->getPageWidthInPixel() * $config_panel_scale - 1;
    print sprintf('<div style="width: %dpx; height: %dpx; overflow: hidden;">', $width, $height) . "\n";
    print sprintf('<img src="image/page_%s.png"  class="config_property_background"/>', $name) . "\n";

    foreach ($page->getDescription() as $description_title => $description) {
      $button_index = $description->getButtonIndex();
      $button_height = $description->getButtonHeight();
      $top = ($description_button_offset + $button_index * $description_button_distance) * $config_panel_scale;
      $height = $button_height * $description_button_height * $config_panel_scale;
      print sprintf('<div data-gypcs-description="msvs_description_%s_%s" class="description_select_button" style="top: %dpx; height: %dpx"></div>', $name, $description_title, $top, $height) . "\n";
    }

    print sprintf('</div>') . "\n";
    print sprintf('</div>') . "\n";
  }
?>

    </div>

  </div>

  <div class="n_code">

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

<script type="text/javascript" src="assets/js/jquery-1.10.0.min.js"></script>
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
    $(".description").css('display', 'none');

    $('.description_select_button').removeClass('selected_button');
    if ($button_element) {
      var description_element_id = $button_element.attr('data-gypcs-description');
      $('#' + description_element_id).css('visibility', 'visible');
      $('#' + description_element_id).css('display', 'block');
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
    $('.config_property').css('visibility', 'hidden');
    $('.config_property').css('display', 'none');
    $('.page_select_button').removeClass('selected_button');
    var page_id = $button_element.attr('data-gypcs-page');
    $('#' + page_id).css('visibility', 'visible');
    $('#' + page_id).css('display', 'block');
    $('.config_properties').css('overflow', 'hidden');
    $('.config_properties').css('overflow-y', 'auto');
    $button_element.addClass('selected_button');
    select_description_by_button();
  };
  
  $('.page_select_button').click(function(event) {
    select_page_by_button($(event.target));
  });

  // select first page and description
  select_page_by_button($('.page_select_button').first());
  select_description_by_button($('.description_select_button').first());

  window.prettyPrint && prettyPrint();
});
</script>
</body>
</html>
