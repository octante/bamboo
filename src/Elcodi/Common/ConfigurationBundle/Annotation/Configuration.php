<?php

/*
 * This file is part of the Elcodi package.
 *
 * Copyright (c) 2014-2015 Elcodi.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * Feel free to edit as you please, and have fun.
 *
 * @author Marc Morera <yuhu@mmoreram.com>
 * @author Aldo Chiecchia <zimage@tiscali.it>
 * @author Elcodi Team <tech@elcodi.com>
 */

namespace Elcodi\Common\ConfigurationBundle\Annotation;

use Mmoreram\ControllerExtraBundle\Annotation\Abstracts\Annotation;

/**
 * Configuration annotation driver
 *
 * @Annotation
 */
class Configuration extends Annotation
{
    /**
     * @var string
     *
     * Name of the parameter
     */
    public $name;

    /**
     * @var string
     *
     * Key from configuration
     */
    public $key;

    /**
     * @var string
     *
     * Default value
     */
    public $default = null;
}
