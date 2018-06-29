<?php

namespace App\Library;

class ContentComponent {
  public $name;
  public $type;
  private $types = [
    'hero' => [ 'title', 'subtitle', 'background' ],
    'p' => []
  ];

  public function __construct($name) {
    $this->name = $name;
  }

  public function define($type, $props) {
      if (!array_key_exists($type, $this->types))
        throw new \Exception(
          "Component '$type' does not exist! Components = [".
          implode(', ', array_keys($this->types)).']', 1
        );
      $this->type = $type;
      $component = $this->types[$type];
      foreach ($props as $key => $value) {
        if (!in_array($key, $component))
          throw new \Exception(
            "Component '$type' does not include the property '$key'! Properties = [".
            implode(', ', array_keys($component)).']', 1
          );
          $this->$key = $value;
      }
  }

}

 ?>
