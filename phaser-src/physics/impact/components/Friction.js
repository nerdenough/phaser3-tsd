/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * [description]
 *
 * @name Phaser.Physics.Impact.Components.Friction
 * @since 3.0.0
 */
var Friction = {

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Friction#setFrictionX
     * @since 3.0.0
     *
     * @param {any} x - [description]
     *
     * @return {any} [description]
     */
    setFrictionX: function (x)
    {
        this.friction.x = x;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Friction#setFrictionY
     * @since 3.0.0
     *
     * @param {any} y - [description]
     *
     * @return {any} [description]
     */
    setFrictionY: function (y)
    {
        this.friction.y = y;

        return this;
    },

    /**
     * [description]
     *
     * @method Phaser.Physics.Impact.Components.Friction#setFriction
     * @since 3.0.0
     *
     * @param {any} x - [description]
     * @param {any} y - [description]
     *
     * @return {any} [description]
     */
    setFriction: function (x, y)
    {
        this.friction.x = x;
        this.friction.y = y;

        return this;
    }

};

module.exports = Friction;
