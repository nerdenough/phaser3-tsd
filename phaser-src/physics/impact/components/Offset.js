/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * [description]
 *
 * @name Phaser.Physics.Impact.Components.Offset
 * @since 3.0.0
 */
var Offset = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Offset#setOffset
     * @since 3.0.0
     *
     * @param {any} x - [description]
     * @param {any} y - [description]
     * @param {any} width - [description]
     * @param {any} height - [description]
     *
     * @return {any} [description]
     */
    setOffset: function (x, y, width, height)
    {
        this.body.offset.x = x;
        this.body.offset.y = y;

        if (width)
        {
            this.setBodySize(width, height);
        }

        return this;
    }

};

module.exports = Offset;
